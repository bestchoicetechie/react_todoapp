
import './TodoForm.css';
import { useState } from 'react';

function TodoForm(props) {
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("");
    const [todoDate, setTodoDate] = useState("");

    const titleChangeHandler = (event)=> {
        setTitle(event.target.value);
    }
    const priorityChangeHandler = (event)=> {
        setPriority(event.target.value);
    }
    const dateChangeHandler = (event)=> {
        setTodoDate(event.target.value);
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        const userInformation = {
            task: title,
            priority: priority,
            date: new Date(todoDate),
        }
        console.log(title, priority, todoDate);
        props.onUserSubmit(userInformation);
        setTitle("");
        setPriority("");
        setTodoDate("");
    };
    
  return (
     
    <form onSubmit={submitHandler}>
        <div className="todo-controls">
            <div className="todo-control">
                <label htmlFor="title">Title</label>
                <input type="text" id='title' value={title} onChange={titleChangeHandler} />
            </div>
            <div className="todo-control">
                <label htmlFor="priority">Priority</label>
                <select name="" id="priority" value={priority} onChange={priorityChangeHandler}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>
            <div className="todo-control">

                <label htmlFor="date">Date</label>
                <input type="date"  id="date" value={todoDate} onChange={dateChangeHandler} />
            </div>
            <div className="todo-actions">
                <button type="submit">Submit</button>
            </div>
        </div>
    </form>
  )
};

export default TodoForm;