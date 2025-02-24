import React, { useReducer, useState } from 'react';
import TodoList from './TodoList';
import { initialState } from './data';
import { reducer } from './Reducer';
import NewTodo from './NewTodo';

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  console.log(dispatch);
  
  return (
    <>
    <div className="main-content" >
      <h1>Todo List</h1>
      <NewTodo dispatch={dispatch}/>
      <TodoList todos={todos} dispatch={dispatch} />
      
    </div>
    </>
  );
}

export default App;
