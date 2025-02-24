

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        {
          userId: "1",
          id: Date.now(),
          title: action.payload,
          completed: false,
          isEditing: false,
        },
        ...state,
      ];
      case "TOGGLE":
        return state.map(todo => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        });
        case "EDIT":
          return state.map(todo => {
            if (todo.id === action.payload) {
              return { ...todo, isEditing: true, editText: todo.title };
            }
            return todo;
          });
    
    case "SAVE":
  return state.map(todo => {
    if (todo.id === action.payload.id) {
      return {
        ...todo,
        title: todo.editText,
        isEditing: false,
        editText: undefined
      };
    }
    return todo;
  });
    
    case "DELETE":
  return state.filter(todo => {
    if (todo.id !== action.payload) {
      return true;
    } else {
      return false;
    }
  });
default:
  return state;

  }

};