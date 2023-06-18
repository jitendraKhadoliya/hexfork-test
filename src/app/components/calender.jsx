import React, { useState } from 'react';
import { ScheduleMeeting } from 'react-schedule-meeting';
import './ScheduleMeeting.css';
import format from 'date-fns/format';
let e1;
let e2;

const availableTimeslots = [0, 1, 2, 3].map((id) => {
  return {
    id,
    startTime: new Date(new Date().setHours(8, 0, 0)),
    endTime: new Date(
      new Date(new Date().setDate(new Date().getDate() + id)).setHours(17, 0, 0)
    ),
  };
});

const Calendar = () => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const handleTimeSlotClick = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };
  const handleTimeslotClicked = (startTimeEventEmit) => {
    const example = format(startTimeEventEmit.startTime, 'LLLL do, h:mm a');
    example.toString();
    e1 = example.split(',')[0].trim();
    e2 = example.split(',')[1].trim();
    console.log(e1, e2);
    return { e1, e2 };
  };
  return (
    // <> {showCalendar? (
    <div className="schedule-meeting-container">
      <ScheduleMeeting
        borderRadius={10}
        className="schedule-meeting-calendar"
        onTimeSlotClick={handleTimeSlotClick}
        primaryColor="#e84d4d"
        availableTimeslots={availableTimeslots}
        onStartTimeSelect={handleTimeslotClicked}
      />
      <div className="schedule-meeting-time-slots" primaryColor="#e84d4d">
        {selectedTimeSlot && (
          <div className="time-slot selected" primaryColor="#e84d4d">
            {selectedTimeSlot}
          </div>
        )}
      </div>
    </div>
    // </>
  );
};
export { e1, e2 };
export default Calendar;
