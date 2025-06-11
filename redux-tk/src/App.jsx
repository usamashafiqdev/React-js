import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Components/AddToDo'
import Todos from './Components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <h1>Redux</h1>
    <AddTodo></AddTodo>
    <Todos></Todos>

    </>
  )
}

export default App
