// SimplePagination.jsx
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="bg-white rounded-lg shadow p-4 mt-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Page Info */}
        <div className="text-sm text-gray-700">
          <span className="font-medium">Page {currentPage}</span> of <span className="font-medium">{totalPages}</span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center space-x-2">
         

          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition"
          >
            Previous
          </button>

          {/* Current Page Display */}
          <div className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
            {currentPage}
          </div>

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition"
          >
            Next
          </button>

         
        </div>

        
      </div>
    </div>
  );
};

export default Pagination;