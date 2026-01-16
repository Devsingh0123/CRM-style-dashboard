import Lead from '../models/Lead.model.js';

// ✅ GET ALL LEADS (with pagination, search, filter)
export const getAllLeads = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = '', status, source } = req.query;
    
    const query = {};
    
    // Search functionality
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } }
      ];
    }
    
    // Filter by status
    if (status) {
      query.status = status;
    }
    
    // Filter by source
    if (source) {
      query.source = source;
    }
    
    const skip = (page - 1) * limit;
    
    // Get total count for pagination
    const totalLeads = await Lead.countDocuments(query);
    
    // Get leads with pagination
    const leads = await Lead.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));
    
    res.status(200).json({
      success: true,
      data: leads,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(totalLeads / limit),
        totalLeads,
        hasNextPage: page * limit < totalLeads,
        hasPrevPage: page > 1
      }
    });
    
  } catch (error) {
    console.error('Get all leads error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch leads',
    });
  }
};



//  GET ANALYTICS DATA
export const getAnalytics = async (req, res) => {
  try {
    // Total leads count
    const totalLeads = await Lead.countDocuments();
    
    // Leads by status
    const leadsByStatus = await Lead.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);
    
    // Leads by source
    const leadsBySource = await Lead.aggregate([
      {
        $group: {
          _id: '$source',
          count: { $sum: 1 }
        }
      }
    ]);
    
    // Monthly leads (last 6 months)
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    
    const monthlyLeads = await Lead.aggregate([
      {
        $match: {
          createdAt: { $gte: sixMonthsAgo }
        }
      },
      {
        $group: {
          _id: {
            year: { $year: '$createdAt' },
            month: { $month: '$createdAt' }
          },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { '_id.year': 1, '_id.month': 1 }
      }
    ]);
    
    res.status(200).json({
      success: true,
      data: {
        totalLeads,
        leadsByStatus,
        leadsBySource,
        monthlyLeads
      }
    });
    
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch analytics',
      error: error.message
    });
  }
};