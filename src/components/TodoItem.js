import React, { useState } from "react";

const TodoItem = ({ item, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(item.title);

  const handleChange = () => {
    dispatch({
      type: "CHECKBOX",
      payload: { ...item, completed: !item.completed },
    });
  };

  const handleSave = () => {
    dispatch({ type: "EDIT", payload: { ...item, title: newTitle } });
    setIsEditing(false);
  };
  return (
    <div className="list-todo ">
      <input type="checkbox" checked={item.completed} onChange={handleChange} />
      {isEditing ? (
        <input
          className="input-item"
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <div className="todo-content">
        {!item.isEditing && (
          <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
            {item.title}

          </span>
        )}
      </div>
      )}
      {isEditing ? (
        <button
          className="edit"
          onClick={handleSave}
        >
          Save
        </button>
      ) : (
        <>
          <button
            className="edit"
            disabled={item.completed}
            onClick={() => setIsEditing(!isEditing)}
          >
            Edit
          </button>
          <button
            className="delete"
            onClick={() => dispatch({ type: "DELETE", payload: { ...item } })}
            disabled={!item.completed}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
