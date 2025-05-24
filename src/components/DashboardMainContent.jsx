import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import ActivityFeed from './ActivityFeed';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';

const DashboardMainContent = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-primary-900">Dashboard</h2>
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 text-indigo-600 font-medium py-1 px-3 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
              <option>This Week</option>
              <option>Last Week</option>
              <option>This Month</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 flex">
          <AnatomySection />
          <HealthStatusCards />
        </div>
        
        <ActivityFeed />
      </div>
      
      <div className="space-y-6">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default DashboardMainContent;