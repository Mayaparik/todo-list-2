import React from 'react'
import { useState, createContext } from 'react'
import Todo from './Todo'

export const  TodoContext = createContext()


function MainPage() {
  
    const [todo, setTodo] = useState("")
    const[todos, setTodos] = useState([])
    const[updateTodo, setUpdateTodo] = useState("")
    const [indexUpdate, setIndexUpdate] = useState("")

  return (
    <div>
        <TodoContext.Provider value={{todo, setTodo, todos, setTodos, updateTodo, setUpdateTodo, indexUpdate, setIndexUpdate}}>
            <Todo />
        </TodoContext.Provider>
      
    </div>
  )
}

export default MainPage
