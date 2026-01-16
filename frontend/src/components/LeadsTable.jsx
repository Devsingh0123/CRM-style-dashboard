// LeadsTable.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

const LeadsTable = () => {

  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
const [debouncedSearch, setDebouncedSearch] = useState("");

  const [filters, setFilters] = useState({
    search: '',
    status: '',
    source: '',
    page: 1,
    limit: 10
  });
  const [pagination, setPagination] = useState({});
  
  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedSearch(searchText);
    setFilters((prev) => ({ ...prev, page: 1 }));
  }, 400);

  return () => clearTimeout(timer);
}, [searchText]);


  useEffect(() => {
    fetchLeads();
  }, [debouncedSearch, filters.status, filters.page]);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE}/api/leads`, {
        params: {
          ...filters,
        search: debouncedSearch,
        },
        withCredentials: true
      });
      setLeads(response.data.data);
      setPagination(response.data.pagination);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching leads:', error);
      setLoading(false);
    } 
  };

 const handleSearch = (e) => {
  setSearchText(e.target.value);
};




  const handleStatusFilter = (e) => {
    setFilters({ ...filters, status: e.target.value, page: 1 });
  };


  const handlePageChange = (page) => {
    setFilters({ ...filters, page });
  };


  if (loading) return <div className="p-8 text-center">Loading leads...</div>;

  return (
    <div className="p-4">
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name, email...."
          value={searchText}
          onChange={handleSearch}
          className="flex-1 px-4 py-2 border rounded-lg"
        />
        
        <select
          value={filters.status}
          onChange={handleStatusFilter}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="">All Status</option>
          <option value="new">New</option>
          <option value="contacted">Connected</option>
          <option value="qualified">Qualified</option>
          <option value="converted">Converted</option>
          <option value="lost">Lost</option>
        </select>

      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
           
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {leads.map((lead) => (
              <tr 
                key={lead._id} 
                className="hover:bg-gray-50 cursor-pointer"
                
              >
                <td className="px-6 py-4 whitespace-nowrap">{lead.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{lead.email}</td>
              
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    lead.status === 'converted' ? 'bg-green-100 text-green-800' :
                    lead.status === 'new' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {lead.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default LeadsTable;