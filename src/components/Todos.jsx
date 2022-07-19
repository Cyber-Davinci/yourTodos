import React from 'react'
import TodoItem from './TodoItem'

function Todos({todos, toggleComplete, deleteTodo}) {
  
  return (
    <div className='flex justify-center  overflow-hidden'>
    <ul className='mt-6 overflow-y-auto h-[600px] overflow-x-hidden'>
        { todos.map((todo,index)=> (
            <TodoItem todo={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
        ))}
    </ul>
    </div>
  )
}

export default Todos