import React from 'react';
import Todo from './Todo';

function TodoList({todo}) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
            {todo.map(todo=>(
                <Todo text={todo.text}/>
            ))}
            </ul>
        </div>
    );
}

export default TodoList;