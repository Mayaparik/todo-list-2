import React from 'react'
import { useContext } from 'react'
import { TodoContext } from './MainPage'

function Todo() {

    const {todo, setTodo, todos, setTodos, updateTodo, setUpdateTodo, indexUpdate, setIndexUpdate} = useContext(TodoContext)
    
    function handleTodo(e){
    e.preventDefault() 
    if(todo.trim() === ""){
        alert("please type something")
        return 
    }
    if(updateTodo) {
      let filterTodo =  todos.filter((td, index)=>{
            return index !== indexUpdate
        })
        setTodos([todo, ...filterTodo])
        setTodo("")
        setUpdateTodo(false)
    }else{
        setTodos((prevState)=> [...prevState, todo])
        setTodo("")
        
    }
    }

    // delete todo function
    function completeTodo(list, index){
    let filterValue = todos.filter((td)=> {
       return list !== td 
    })
    setTodos([...filterValue])
    console.log(filterValue);
    }

    // edit todo function
    function editTodo(list, index){
        setTodo(list)
        setIndexUpdate(index)
        setUpdateTodo(true)
    }





      
    return (
        <div>
            <div className=' h-screen w-screen text-center py-4 bg-white text-black '>
                <div className='w-[600px] h-full shadow-md mx-auto text-center space-y-3'>
                    <h2 className='text-2xl font-extrabold'>TO DO LIST</h2>
                    <div className=' rounded-lg w-[550px] mx-auto  p-3 space-x-2 space-y-3'>
                        <div className='flex space-x-2'>
                            <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder='type work to do' className='text-left py-1 px-2 w-10/12 border border-zinc-400 rounded-lg' />
                            <button onClick={handleTodo} className='text-white bg-black py-2 px-4 rounded-lg w-2/12'>add</button>
                        </div>
                        <ul className='list-inside text-lg space-y-3'>
                            {
                                todos.map((list, index)=>{
                                    return(
                                        <li key={index}  className='bg-sky-500/60  px-3 py-2 list-disc rounded-lg text-white flex justify-between items-center'>
                                          {list}
                                          <div className='flex'>
                                          <i onClick={() => editTodo(list, index)} className="bi bi-pencil text-xl text-white cursor-pointer px-2 hover:bg-sky-700/60 py-1 rounded-lg"></i>
                                          <i onClick={()=> completeTodo(list, index)} className="bi bi-trash text-xl text-white cursor-pointer px-2 hover:bg-sky-700/60 py-1 rounded-lg"></i>
                                          </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo
