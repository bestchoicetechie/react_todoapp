import './todos.css';
import TodoItem from '../TodoItem/TodoItem';
import Card from '../card/Card';



const Todos = (props) => {
    const Task_Array = props.todoData;
  return (
    <Card className='todos'>
    {Task_Array.map((todo) =>(
      <TodoItem 
        task={todo.task} 
        date={todo.date} 
        priority={todo.priority}
        key={todo.id}

      />

    ))}
     
      {/* <TodoItem 
        task={Task_Array[1].task} 
        date={Task_Array[1].date} 
        priority={Task_Array[1].priority} 

      />
      <TodoItem 
        task={Task_Array[2].task} 
        date={Task_Array[2].date} 
        priority={Task_Array[2].priority}
      />
      <TodoItem 
        task={Task_Array[3].task} 
        date={Task_Array[3].date} 
        priority={Task_Array[3].priority}
      /> */}
    </Card>
  )
}

export default Todos
