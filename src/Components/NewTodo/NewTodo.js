import './NewTodo.css';
import TodoForm from '../TodoForm/TodoForm'




  const NewTodo = (props) =>{
    // const getUserData = (userInfo) =>{
    const getUserData = (userInfo) =>{
        const newTask = {
          ...userInfo,
          id: Math.random().toString(),
        };
        // 0 to 1
        props.onDataReceive(newTask);
        console.log(userInfo);
      };

        return (
          <div className='new-todo'>
          <TodoForm onUserSubmit={getUserData} />
            
          </div>
        )
      };
export default NewTodo;
