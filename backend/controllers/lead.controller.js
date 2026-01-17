import Lead from '../models/Lead.model.js';

// ✅ GET ALL LEADS (with pagination, search, filter)
export const getAllLeads = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = '', status } = req.query;
    
    const query = {};
    
    // Search functionality
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
       
      ];
    }
    
    // Filter by status
    if (status) {
      query.status = status;
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
    
 
    res.status(200).json({
      success: true,
      data: {
        totalLeads,
        leadsByStatus,
        
        
      }
    });
    
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch analytics',
    });
  }
};