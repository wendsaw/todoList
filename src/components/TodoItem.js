import React from 'react';

const TodoItem = ({ todo, dispatch }) => {
  const handleToggle = () => dispatch({ type: "TOGGLE", payload: todo.id });
  const handleEdit = () => dispatch({ type: "EDIT", payload: todo.id });
  const handleDelete = () => dispatch({ type: "DELETE", payload: todo.id });
  const handleChange = (e) =>
    dispatch({
      type: "CHANGE_EDIT_TEXT",
      payload: { id: todo.id, value: e.target.value },
    });
  

  return (

    
    <li id='list-item'>
      <div className='check-box' >
        <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
        {todo.isEditing ? (
          <input
            type="text"
            value={todo.editText}
            onChange={handleChange}
            style={{ marginLeft: '0.5rem' }}
          />
        ) : (
          <span id='span'
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            {todo.title}
          </span>
        )}
      </div>
      <div>
        {todo.isEditing ? (
          <>
           
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
};

export default TodoItem;
