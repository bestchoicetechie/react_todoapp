
import './App.css';
// import TodoItem  from './Components/TodoItem';
import Header from './Components/Header/Header';
import Todos from './Components/todos/Todos';
import NewTodo from './Components/NewTodo/NewTodo';
import { useState } from 'react';
function App() {
  const Task_Array = [
    {
      id: 'T001',
      task: 'Plan Recording',
      date: new Date(2022,8,19),
      priority: 'Medium'
    },
    {
      id: 'T002',
      task: 'Lecture',
      date: new Date(2022, 8, 10),
      priority: 'High'
    },
    {
      id: 'T003',
      task: 'Blogging',
      date: new Date(2023, 9, 10),
      priority: 'Medium'
    },
    {
      id: 'T004',
      task: 'Set up Social Media Adverts',
      date: new Date(2024, 9, 1),
      priority: 'High'
    }
  ];
  const [allTodo, setAllTodo] = useState(Task_Array);

  const onAddUser = (finalData) => {
    setAllTodo((prevData) =>{
      return [finalData, ...prevData];
    });
    console.log(finalData);
  }
  return (
    <div className="App">
      <Header />
     <NewTodo onDataReceive ={onAddUser} />
      <Todos todoData={allTodo} />
      
      <Header />
    </div>
  );
}

export default App;
