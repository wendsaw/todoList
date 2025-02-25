import React from 'react';

const TodoItem = ({todo,dispach}) => {

  const handleFlip=()=>{
    dispach({type:"FLIP", payload:todo.id});

  }
  const handleEdit=()=>{
    dispach({type:"EDIT", payload:todo.id})
  }
  const handleDelete=()=>{
    dispach({type:"Delete", payload:todo.id})
  }

  const handleChange=(e)=>{
    dispach({ type:"CHANGE_EDIT_TEXT", payload:{id:todo.id, value:e.target.value}})

  };

  const handleSave=()=>{
    dispach({type:"SAVE", payload:{id:todo.id}})
  }
  const handleCancel=()=>{
    dispach({type:"CANCEL_EDIT", payload:todo.id})}


  return ( 
    <li>

<div className="todo-liste">
      <input type="checkbox" checked={todo.complete} onChange={handleFlip}/>
      {todo.IsEditing? (
        <input type='text'
        value={todo.edittext}
        onChange={{handleChange}}
        style={{marginLeft:"0.5rem"}}
        />
      ):
      (
        <span id='span'
        style={{
          textDecoration:todo.complete? "line-throught":"none",
        }}> 
        {todo.title}
        </span>
       
      )}

    </div>

    <div>

    {todo.isEditing ? (
          <>
            <button className='save' onClick={handleSave} >
              Save
            </button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            <button className='edit' onClick={handleEdit} >
              Edit
            </button>
            <button className='delete' onClick={handleDelete} disabled={!todo.completed}>
              Delete
            </button>
          </>
        )}

      
    </div>
    </li>

    

      
    
   );
}
 
export default TodoItem;



