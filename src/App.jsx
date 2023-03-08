import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ClassComponent from './components/ClassComponent'
import FuncComponent from './components/FuncComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ClassComponent/>
      <FuncComponent/>
    </div>
  )
}

export default App
