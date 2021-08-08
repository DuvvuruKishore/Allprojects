import React,{useState} from 'react';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {

  const [name,setName]=useState("");
  const [todo,setTodos]=useState([]);
  return (
    <div className="App">
      <h1>Hello App</h1>
      <Form name={name} setName={setName}
      todo={todo} setTodos={setTodos}/>
      <TodoList todo={todo}/>
    </div>
  );
}

export default App;
