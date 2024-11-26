import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       {/* TITOLO */}
       <header className="titleContainer">
        <h1 className="mainTitle">Task Manager</h1>
      </header>

    </>
  )
}

export default App
