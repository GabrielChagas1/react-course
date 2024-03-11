import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserDetails from './components/UserDetails'

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Gabriel',
      age: '24',
      profession: 'Dev'
    },
    {
      id: 2,
      name: 'Maysa',
      age: '20',
      profession: 'Fisioterapia'
    },
    {
      id: 3,
      name: 'Gabriela',
      age: '34',
      profession: 'RH'
    },
    {
        id: 4,
        name: 'Arthur',
        age: '15',
        profession: 'RH'
      },
  ])

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
      <div className="container">
      {
            users.map((item) => (
                <>
                  <UserDetails name={item.name} age={item.age} profession={item.profession} key={item.id} />
                </>
            ))
      }
      </div>
    </>
  )
}

export default App
