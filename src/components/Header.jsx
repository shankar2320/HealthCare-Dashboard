import React from 'react';
import { FiSearch, FiBell, FiPlus } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="bg-white py-4 px-6 border-b border-gray-200 flex items-center justify-between">
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-primary-800">Healthcare.</h1>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500 w-64"
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        
        <div className="relative">
          <FiBell className="text-gray-600 w-6 h-6 cursor-pointer hover:text-primary-600 transition-colors" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </div>
        
        <button className="bg-primary-600 text-white p-2 rounded-full hover:bg-primary-700 transition-colors">
          <FiPlus />
        </button>
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
           <img 
  src="/dp.png.jpg" 
  alt="DP" 
  className="h-full object-contain"
/>
          </div>
          <div>
            <p className="text-sm font-medium">Dr. Raviranjan Kr. singh</p>
            <p className="text-xs text-gray-500">Cardiologist</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;