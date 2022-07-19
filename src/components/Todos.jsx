import React from 'react'
import TodoItem from './TodoItem'

function Todos({todos, toggleComplete, deleteTodo}) {
  
  return (
    <ul className=' h-[600px] flex flex-col md:justify-center md:items-center mt-6 pt-[150px] overflow-y-auto'>
        { todos.map((todo,index)=> (
            <TodoItem todo={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
        ))}
    </ul>
  )
}

export default Todos