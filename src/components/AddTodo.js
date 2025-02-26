import React, { useState } from "react";

const AddTodo = ({dispatch}) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
     e.preventDefault()
     dispatch({type : "ADD", payload : input})
     setInput("")
  }
  return (
    <form onSubmit={handleSubmit} className="new-todo">
      <input
        className="input "
        type="text"
        name=""
        id=""
        onChange={(e) => setInput(e.target.value)}
        value={input}    
      />
      <button type="submit" className="add">Add</button>
    </form>
  );
};

export default AddTodo;
