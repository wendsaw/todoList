import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({state, dispatch}) => {

  return (
    <div >
        {state.map(item => {
       return   <TodoItem key={item.id} item={item} dispatch={dispatch} />
        })}
    </div>
  )
}

export default TodoList