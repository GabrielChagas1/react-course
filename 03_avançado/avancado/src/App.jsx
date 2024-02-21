import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import imageCity from "./assets/pexels-lukas-kloeppel-466685.jpg"
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import { ConditionalRender } from './components/ConditionalRender'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'

function App() {
  const [count, setCount] = useState(0)
  const cars = [
    {id: 1, brand: "Ferrari", color: "Blue", km:0},
    {id: 2, brand: "VW", color: "Blue", km:0},
    {id: 3, brand: "Teste", color: "Blue", km:0}
  ]

  function showMessage(){
    console.log('evento do componente pai')
  }

  const [message, setMessage] = useState("")
  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h3>Avançado - Módulo 3</h3>

        {/* imagem em public */}
        <img src="/img1.jpg" alt="Praia" />

        {/* imagem em assets */}
        <div>
          <img src={imageCity} alt="Cidade" />


           <ManageData />
           <ListRender />
           <ConditionalRender />
           {
            cars.map((car) => (
              <CarDetails brand={car.brand} km={car.km} color={car.color} key={car.id} />
            ))
           }

           <Fragment />
           <Container>
              <h2>Olá aqui é um teste</h2>
           </Container>

           <ExecuteFunction myFunction={showMessage} />

           {/* State Lift */}
           <Message msg={message} />
           <ChangeMessageState handleMessage={handleMessage} />
        </div>
      </div>
    </>
  )
}

export default App
