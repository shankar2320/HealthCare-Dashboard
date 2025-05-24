import React from 'react';

const ActivityFeed = () => {
  // Data for activity bars
  const weekdays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-primary-900">Activity</h3>
        <div className="text-sm text-gray-500">3 appointments on this week</div>
      </div>
      
      <div className="flex items-end justify-between h-40">
        {weekdays.map((day, index) => (
          <div key={index} className="flex flex-col items-center gap-2 w-1/7">
            {/* Primary activity bars */}
            <div className="flex space-x-1">
              {index % 2 === 0 ? (
                <>
                  <div className="w-2 bg-lightBlue rounded-full" style={{ height: `${20 + Math.random() * 60}px` }}></div>
                  <div className="w-2 bg-gray-200 rounded-full" style={{ height: `${10 + Math.random() * 30}px` }}></div>
                </>
              ) : (
                <>
                  <div className="w-2 bg-gray-200 rounded-full" style={{ height: `${10 + Math.random() * 20}px` }}></div>
                  <div className="w-2 bg-darkBlue rounded-full" style={{ height: `${20 + Math.random() * 70}px` }}></div>
                </>
              )}
            </div>
            <span className="text-sm text-gray-500 mt-2">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;