import React from 'react'
import { useState } from 'react'
import {  PaperAirplaneIcon } from '@heroicons/react/solid'
import {v4 as uuidv4} from "uuid";


function AddTodo({addTodo}) {
  const [todo, setTodo] = useState({
    id:"",
    todoTask:"",
    completed:false,
  })

  const handleInputTodoChange = (e)=>{
    setTodo({...todo, todoTask:e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(todo.todoTask.trim()){
      addTodo({...todo, id:uuidv4()})

      setTodo({...todo, todoTask:""})
    }
  }

  return (
    <div className={`md:fixed md:bottom-14 md:left-0 md:right-0`}>
        <form onSubmit={handleSubmit}>
          <div className='flex mx-auto justify-center mt-8'>
          <input className='border-b rounded-lg rounded-tr-none rounded-br-none pl-3 w-[400px] md:w-[600px] md:h-16 h-12 outline-none md:text-xl' type="text" placeholder='add new todo...'  
          value={todo.todoTask}
          onChange={handleInputTodoChange}
          />
          <div>            
            <PaperAirplaneIcon className='w-12  md:w-16 border-r border-b-0 bg-white cursor-pointer text-green-500 rotate-90' onClick={handleSubmit}/>
          </div>
          </div>

        </form>
    </div>
  )
}

export default AddTodo