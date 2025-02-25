
import { useState} from "react";

const NewTodo = ({dispatch}) => {

    const [newTodo, setNewTodo] = useState('');
    

    const handleAddTodo = (e) => {
        e.preventDefault();
          dispatch({ type: "ADD", payload: newTodo });
          setNewTodo('');
        
      };

      const handChange=(e)=>{

         setNewTodo(e.target.value)
        

      }
    

    return (  
    <>
    
     <form onSubmit={handleAddTodo} className="new-todo">
        <input
        // ref={input}
         className="input"
          type="text"
          value={newTodo}
          onChange={handChange}
          placeholder="Add a new todo"
          
        />
        <button  className="add"   type="submit" >
          Add
        </button>
      </form></>
    );
}
 
export default NewTodo;