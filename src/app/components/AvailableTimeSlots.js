
import React from 'react';

const AvailableTimeSlots = ({ date }) => {
  const timeSlots = [
    '09:00 AM',
    '09:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '01:00 PM',
    '01:30 PM',
    '02:00 PM',
    '02:30 PM',
    '03:00 PM',
    '03:30 PM',
    '04:00 PM',
    '04:30 PM',
  ];

  return (
    <div>
      <h3>Available Time Slots for {date.toLocaleDateString()}</h3>
      <ul>
        {timeSlots.map((timeSlot) => (
          <li key={timeSlot}>{timeSlot}</li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableTimeSlots;