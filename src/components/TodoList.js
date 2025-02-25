import React from 'react';
import TodoItem from './TodoItem'

const TodoList = ({ todos, dispatch }) => {
  return (
    
    <div className='todo-list'>
    <ul >
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
    </div>
  );
};

export default TodoList;
