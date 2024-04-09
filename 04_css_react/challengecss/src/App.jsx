import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CarDetails from './Components/CarDetails'
  const [cars, setCar] = useState([
    {
      id: 1,
      name: 'Gol',
      color: 'Azul',
      value: '15.000',
      available: false
    },
    {
      id: 2,
      name: 'Fiesta',
      color: 'Branco',
      value: '20.000',
      available: true
    },
    {
      id: 3,
      name: 'Corsa',
      color: 'Preto',
      value: '12.000',
      available: true
    }
  ])
