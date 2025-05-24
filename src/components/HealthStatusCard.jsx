import React from 'react';

const HealthStatusCard = ({ title, date, status, percentage, icon }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'good':
        return 'bg-healthyGreen';
      case 'warning':
        return 'bg-warningRed';
      case 'caution':
        return 'bg-cautionOrange';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex items-center gap-3">
        <span className="text-2xl" role="img" aria-label={title}>
          {icon}
        </span>
        <h3 className="text-lg font-semibold text-primary-900">{title}</h3>
      </div>
      
      <div className="text-sm text-gray-500 mt-2">
        Date: {date}
      </div>
      
      <div className="health-status-bar">
        <div 
          className={`status-indicator ${getStatusColor(status)}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default HealthStatusCard;