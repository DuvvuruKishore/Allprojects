import React from 'react';

function Form({name,setName,todo,setTodos}) {


  const nameChangeHandler=(e)=>{
     setName(e.target.value);
  }

  const addNameHandler=(e)=>{
    e.preventDefault();
    setTodos([...todo,
    {text:name,completed:false,id:Math.random()*1000}
    ])
    setName("");
  }


    return (
        <div>
        <form>
        <input value={name} onChange={nameChangeHandler} type="text" className="todo-input" />
        <button onClick={addNameHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
  
        </div>
    );
}

export default Form;