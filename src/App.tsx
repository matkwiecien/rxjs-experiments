import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { Counter } from './Counter'
import { CounterClick } from './CounterClick'

function App() {

  return (
    <div className="App">
      <Counter />
      <CounterClick />
    </div>
  )
}

export default App
