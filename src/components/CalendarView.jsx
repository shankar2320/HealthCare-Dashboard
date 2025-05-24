import React from 'react';
import AppointmentCard from './AppointmentCard';

const CalendarView = () => {
  // Mock data for calendar grid
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const appointmentDays = [8, 12, 17, 23, 28]; // Days with appointments
  
  const appointments = [
    {
      id: 1,
      title: 'Dentist',
      doctor: 'Dr. Robert Miles',
      time: '09:00 - 10:00',
      type: 'dental'
    },
    {
      id: 2,
      title: 'Physiotherapy Appointment',
      doctor: 'Dr. Maria Garcia',
      time: '14:30 - 15:30',
      type: 'physio'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-primary-900">October 2021</h3>
        <div className="flex space-x-2">
          <button className="p-1 rounded-full bg-gray-100 text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="p-1 rounded-full bg-gray-100 text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Weekday headers */}
      <div className="grid grid-cols-7 mb-2">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <div key={index} className="text-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>
      
      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1 mb-6">
        {days.map((day) => {
          const hasAppointment = appointmentDays.includes(day);
          return (
            <div 
              key={day} 
              className={`aspect-square rounded-lg flex flex-col items-center justify-center p-1
                ${hasAppointment ? 'bg-primary-100' : 'hover:bg-gray-100'} 
                ${day === 17 ? 'ring-2 ring-primary-500' : ''}
              `}
            >
              <span className={`text-sm ${day === 17 ? 'font-bold text-primary-700' : 'text-gray-700'}`}>
                {day}
              </span>
              {hasAppointment && (
                <div className="mt-1 text-xs text-primary-600 font-medium">
                  {day % 3 === 0 ? '09:00' : day % 2 === 0 ? '11:00' : '14:30'}
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {/* Appointment cards */}
      <div className="space-y-4">
        {appointments.map(appointment => (
          <AppointmentCard 
            key={appointment.id}
            title={appointment.title}
            doctor={appointment.doctor}
            time={appointment.time}
            type={appointment.type}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarView;