
import './TodoItems.css'
import TodoDate from '../todoDate/TodoDate';
import { useState } from 'react';





function TodoItem(props) {
    const [todoTitle, setTodoTitle] = useState(props.task);
    console.log(props);
    const todoDate = props.date;
    const todoTask = props.task;
    // const todoPriority = "Medium"

    const clickHandler = () => {
        setTodoTitle("this is new title");
        //todoTask = "this is updated"
        console.log(todoTitle);
    };
  
   
    return (
    //JSX
    <div className='todo-item'>
        <TodoDate date={todoDate} />
        <div className='todo-description'>
            <h2>{todoTask}</h2>
            <div className='todo-priority'>{props.priority}</div>
            <button onClick={clickHandler}>Change</button>
        </div>
    </div>
    );
}
export default TodoItem;

// Hooks are simply the way we can work with virtual Dom. Hooks are function.
// state of the uI = component render
// state means whatedver yui u can see. The way the ui is and variable is. A way to interract the virtual Dom.
// useState is a hook  state - useState








