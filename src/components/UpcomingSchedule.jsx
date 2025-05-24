import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const UpcomingSchedule = () => {
  const appointments = [
    {
      id: 1,
      day: 'Thursday',
      appointments: [
        {
          id: 101,
          title: 'Health checkup complete',
          time: '10:00 AM',
          type: 'checkup',
          status: 'completed'
        },
        {
          id: 102,
          title: 'Ophthalmologist',
          time: '2:30 PM',
          type: 'eye',
          status: 'upcoming'
        }
      ]
    },
    {
      id: 2,
      day: 'Saturday',
      appointments: [
        {
          id: 201,
          title: 'Cardiologist',
          time: '9:15 AM',
          type: 'cardio',
          status: 'upcoming'
        },
        {
          id: 202,
          title: 'Neurologist',
          time: '11:45 AM',
          type: 'neuro',
          status: 'upcoming'
        }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-primary-900">The Upcoming Schedule</h3>
        <button className="text-primary-600 font-medium text-sm hover:text-primary-700">
          View All
        </button>
      </div>
      
      <div className="space-y-6">
        {appointments.map(daySchedule => (
          <div key={daySchedule.id}>
            <h4 className="text-gray-500 font-medium mb-3">On {daySchedule.day}</h4>
            <div className="space-y-3">
              {daySchedule.appointments.map(appointment => (
                <SimpleAppointmentCard 
                  key={appointment.id}
                  title={appointment.title}
                  time={appointment.time}
                  type={appointment.type}
                  status={appointment.status}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;