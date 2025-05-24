import React from 'react';
import { FiClock } from 'react-icons/fi';

const AppointmentCard = ({ title, doctor, time, type }) => {
  const getAppointmentColor = (type) => {
    switch (type) {
      case 'dental':
        return 'bg-blue-500';
      case 'cardio':
        return 'bg-red-500';
      case 'neuro':
        return 'bg-purple-500';
      case 'physio':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };
  
  const getAppointmentIcon = (type) => {
    switch (type) {
      case 'dental':
        return '🦷';
      case 'cardio':
        return '❤️';
      case 'neuro':
        return '🧠';
      case 'physio':
        return '💪';
      default:
        return '🏥';
    }
  };

  return (
    <div className="flex items-center p-3 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <div className={`${getAppointmentColor(type)} p-3 rounded-lg mr-4 text-white`}>
        <span role="img" aria-label={type} className="text-xl">
          {getAppointmentIcon(type)}
        </span>
      </div>
      
      <div className="flex-1">
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{doctor}</p>
      </div>
      
      <div className="flex items-center text-sm text-gray-500">
        <FiClock className="mr-1" />
        {time}
      </div>
    </div>
  );
};

export default AppointmentCard;