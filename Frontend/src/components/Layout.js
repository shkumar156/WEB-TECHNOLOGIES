import React, { useState } from 'react';
import '../components/layout.css';

function Layout() {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const [selectedDate, setSelectedDate] = useState(currentDay);

  // Function to handle date selection
  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  // Create an array of days in the month
  const monthDays = [];
  for (let i = 1; i <= daysInMonth; i++) {
    monthDays.push(i);
  }

  return (
    <div className="calendar">
      <div className="calendar-header">
        <h2>{months[currentMonth]} {currentYear}</h2>
      </div>
      <div className="days-of-week">
        {daysOfWeek.map(day => (
          <div key={day} className="day-of-week">{day}</div>
        ))}
      </div>
      <div className="calendar-grid">
        {Array(firstDay)
          .fill(null)
          .map((_, index) => (
            <div key={`empty-${index}`} className="empty-day"></div>
          ))}
        {monthDays.map(day => (
          <div
            key={day}
            onClick={() => handleDateClick(day)}
            className={`calendar-day ${selectedDate === day ? 'selected' : ''} ${day === currentDay ? 'current-day' : ''}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Layout;
