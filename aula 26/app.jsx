import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PrimeiroComponente from './Componentes/PrimeiroComponente'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Olá mundo</h1>
      <p>Primeiro paragrafo</p>
      <PrimeiroComponente/>
    </>
  )
}

export default App
