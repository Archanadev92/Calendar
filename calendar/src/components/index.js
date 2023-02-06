import { useState } from 'react';
import CalendarModule from './calendar';

function Main() {
  const [date, setDate] = useState(new Date());

  return (
    <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
      <h1 className='text-center'>React Calendar</h1>
      <div className='calendar-container'>
        <CalendarModule onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
}

export default Main;