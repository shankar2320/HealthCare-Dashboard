import React from 'react';
import { FiZoomIn } from 'react-icons/fi';

const AnatomySection = () => {
  return (
    <div className="flex-1 relative">
      <div className="relative w-full h-96 flex items-center justify-center">
        <img 
  src="/image.png" 
  alt="Human Anatomy" 
  className="h-full object-contain"
/>
        
        {/* Zoom button */}
        <button className="absolute top-0 right-0 bg-white rounded-full p-2 shadow-md">
          <FiZoomIn className="text-gray-600" />
        </button>
        
        {/* Heart Indicator */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
          <div className="bg-darkBlue text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <span className="text-red-500">❤️</span>
            <span className="text-sm font-medium">Healthy Heart</span>
          </div>
        </div>
        
        {/* Leg Indicator */}
        <div className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2">
          <div className="bg-lightBlue text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <span>🦵</span>
            <span className="text-sm font-medium">Healthy Leg</span>
          </div>
        </div>
        
        {/* Control slider at bottom */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <input 
            type="range" 
            min="0" 
            max="100" 
            defaultValue="50" 
            className="w-3/4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;