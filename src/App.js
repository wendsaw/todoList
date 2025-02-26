import { useReducer } from "react";
import { reducer } from "./reducer";
import initialState from"./data"

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div className="main-content ">
      
      <AddTodo dispatch={dispatch}/>
      <TodoList state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
