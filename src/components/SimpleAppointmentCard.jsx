import React from 'react';
import { 
  FiCheckCircle, FiEye, FiHeart, 
  FiActivity, FiCalendar 
} from 'react-icons/fi';

const SimpleAppointmentCard = ({ title, time, type, status }) => {
  const getTypeIcon = () => {
    switch (type) {
      case 'checkup':
        return <FiActivity className="w-5 h-5" />;
      case 'eye':
        return <FiEye className="w-5 h-5" />;
      case 'cardio':
        return <FiHeart className="w-5 h-5" />;
      case 'neuro':
        return <FiActivity className="w-5 h-5" />; // Changed from FiBrain to FiActivity
      default:
        return <FiCalendar className="w-5 h-5" />;
    }
  };
  
  const getStatusStyles = () => {
    if (status === 'completed') {
      return {
        container: 'bg-green-50 border-green-200',
        icon: 'text-green-500',
        badge: 'bg-green-100 text-green-800'
      };
    }
    return {
      container: 'bg-white border-gray-200',
      icon: 'text-primary-600',
      badge: 'bg-primary-100 text-primary-800'
    };
  };
  
  const styles = getStatusStyles();

  return (
    <div className={`flex items-center p-4 rounded-lg border ${styles.container}`}>
      <div className={`${styles.icon} mr-4`}>
        {status === 'completed' ? <FiCheckCircle className="w-5 h-5" /> : getTypeIcon()}
      </div>
      
      <div className="flex-1">
        <h4 className="font-medium text-gray-900">{title}</h4>
        <span className={`text-xs px-2 py-1 rounded-full ${styles.badge} inline-block mt-1`}>
          {time}
        </span>
      </div>
      
      <div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;