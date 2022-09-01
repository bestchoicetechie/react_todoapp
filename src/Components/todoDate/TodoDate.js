
import './todoDate.css';
import React from 'react';

const TodoDate = (props) => {
    const month = props.date.toLocaleString("en-US", {month: "long"});
    const day = props.date.toLocaleString("en-US", {day: "2-digit"});
    const year = props.date.getFullYear();

  return (
    <div className='todo-date'>
        
        <div className='todo-month'>{month}</div>
        <div className='todo-year'>{year}</div>
        <div className='todo-day'>{day}</div>
        
    </div>
  )
}

export default TodoDate