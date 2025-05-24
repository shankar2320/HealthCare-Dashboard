import React from 'react';
import HealthStatusCard from './HealthStatusCard';

const HealthStatusCards = () => {
  const healthData = [
    {
      id: 1,
      title: 'Lungs',
      date: '26 Oct 2021',
      status: 'warning', // warning, good, caution
      percentage: 70,
      icon: '🫁'
    },
    {
      id: 2,
      title: 'Teeth',
      date: '26 Oct 2021',
      status: 'good',
      percentage: 85,
      icon: '🦷'
    },
    {
      id: 3,
      title: 'Bone',
      date: '26 Oct 2021',
      status: 'caution',
      percentage: 60,
      icon: '🦴'
    }
  ];

  return (
    <div className="w-64 space-y-4">
      {healthData.map(item => (
        <HealthStatusCard 
          key={item.id}
          title={item.title}
          date={item.date}
          status={item.status}
          percentage={item.percentage}
          icon={item.icon}
        />
      ))}
      
      <div className="flex justify-end mt-2">
        <button className="text-primary-600 text-sm font-medium flex items-center">
          Details
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HealthStatusCards;