
import { useState} from "react";

const NewTodo = ({dispatch}) => {

    const [newTodo, setNewTodo] = useState('');
    

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (newTodo.trim()) {
          dispatch({ type: "ADD", payload: newTodo });
          setNewTodo('');
        }
      };

      const handChange=(e)=>{

         setNewTodo(e.target.value)
        

      }
    

    return (  
    <>
    
     <form onSubmit={handleAddTodo} className="new-todo">
        <input
        // ref={input}
          type="text"
          value={newTodo}
          onChange={handChange}
          placeholder="Add a new todo"
          style={{ width: '80%', padding: '0.5rem' }}
        />
        <button  className="add"   type="submit" >
          Add
        </button>
      </form></>
    );
}
 
export default NewTodo;