import React from 'react'
import { useState, createContext } from 'react'
import Counter from './Counter'

export const counterContext = createContext()

function CounterMain() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <counterContext.Provider value={{ count, setCount }} >
                <Counter />
            </counterContext.Provider>
        </div>
    )
}

export default CounterMain
