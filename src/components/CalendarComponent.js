import React, { useState, useEffect } from 'react'
import './Calendar.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function CalendarComponent( {currentComponentSelected} ) {

    const [calendarClass, setCalendarClass ] = useState('');
    const calendarSection = document.getElementById('calendar-component');

    useEffect(() => {
      
      if(currentComponentSelected === 'Dashboard') {
          setCalendarClass('normal');
      } else if (currentComponentSelected === 'Calendar'){
          setCalendarClass('is-selected');
          calendarSection.scrollIntoView();
      } else {
          setCalendarClass('is-not-selected');
      }
    }, [currentComponentSelected])

    return (
        <div id="calendar-component" className={`calendar-component ${currentComponentSelected === 'Calendar' ? 'scale-up' : ''}`}>
            <div className={calendarClass}></div>
        <Calendar className={`cal`}/>
        <div className="scroll-to-top"></div>
        </div>
    )
}

export default CalendarComponent
