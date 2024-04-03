import { useState } from 'react'
import './App.css'
import { Header } from './componentes/Header'
import { Home } from './vistas/Home'

function App() {

  const coloresAzules = [
    'bg-blue-100',
    'bg-blue-200',
    'bg-blue-500',
    'bg-blue-700',
  ]
  // let colorApp = coloresAzules[3]

  const [colorApp, setColorApp] = useState('bg-blue-100')

  

  return (
    <div className={`${colorApp} p-3`}>
      
      <Header colorApp={colorApp} setColorApp={setColorApp} coloresAzules={coloresAzules}></Header>
      <Home></Home>
    </div>
  )
}

export default App
