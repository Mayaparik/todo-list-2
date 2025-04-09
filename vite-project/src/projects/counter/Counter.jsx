import React from 'react'
import { useContext } from 'react'
import { counterContext } from './CounterMain'

function Counter() {
  const{count, setCount} = useContext(counterContext)
  function inc(){
    setCount(count + 1)
  }
  function dec(){
    setCount (count-1)
  }
  return (
    <div >
      <div className=' w-2/12  text-white items-center p-4 flex justify-center space-x-3 text-center text-2xl mx-auto'>
        <button onClick={inc} className='bg-neutral-700 px-3 py-2'>+</button>
        <h2 className='text-black'>{count}</h2>
        <button onClick={dec} className='bg-neutral-700 px-4 py-2'>-</button>        
        </div>      
    </div>
  )
}

export default Counter
