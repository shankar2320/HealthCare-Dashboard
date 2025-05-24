import React from 'react';
import { 
  FiHome, FiClock, FiCalendar, FiClipboard, 
  FiBarChart2, FiFileText, FiMessageSquare, 
  FiHelpCircle, FiSettings 
} from 'react-icons/fi';

const Sidebar = () => {
  return (
    <aside className="bg-white w-64 border-r border-gray-200 flex-shrink-0 h-full overflow-y-auto hidden md:block">
      <div className="p-6">
        <h2 className="text-gray-500 font-medium uppercase text-xs tracking-wider mb-6">General</h2>
        
        <nav className="space-y-1">
          <a href="#" className="sidebar-link sidebar-link-active">
            <FiHome className="w-5 h-5" />
            <span>Dashboard</span>
          </a>
          
          <a href="#" className="sidebar-link sidebar-link-inactive">
            <FiClock className="w-5 h-5" />
            <span>History</span>
          </a>
          
          <a href="#" className="sidebar-link sidebar-link-inactive">
            <FiCalendar className="w-5 h-5" />
            <span>Calendar</span>
          </a>
          
          <a href="#" className="sidebar-link sidebar-link-inactive">
            <FiClipboard className="w-5 h-5" />
            <span>Appointments</span>
          </a>
          
          <a href="#" className="sidebar-link sidebar-link-inactive">
            <FiBarChart2 className="w-5 h-5" />
            <span>Statistics</span>
          </a>
          
          <a href="#" className="sidebar-link sidebar-link-inactive">
            <FiFileText className="w-5 h-5" />
            <span>Tests</span>
          </a>
          
          <a href="#" className="sidebar-link sidebar-link-inactive">
            <FiMessageSquare className="w-5 h-5" />
            <span>Chat</span>
          </a>
          
          <a href="#" className="sidebar-link sidebar-link-inactive">
            <FiHelpCircle className="w-5 h-5" />
            <span>Support</span>
          </a>
          
          <a href="#" className="sidebar-link sidebar-link-inactive">
            <FiSettings className="w-5 h-5" />
            <span>Settings</span>
          </a>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;