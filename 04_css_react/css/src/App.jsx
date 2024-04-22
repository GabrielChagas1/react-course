import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {
  const [count, setCount] = useState(0)

  const n = 15;
  const redTitle = false

  return (
    <>
      <h1>React com css</h1>
      <MyComponent />
      {/* Inline Css */}
      <p style={{
        color: 'black',
        background: 'tomato',
        padding: '25px',
        borderTop: '2px solid red'
      }}>
        Este elemento foi estilizado de forma inline
      </p>
      {/* css inline dinâmico */}
      <h2 style={n < 10 ? ({color: 'purple'}) : ({color: 'pink'})}>Css dinâmico</h2>
      <h2 style={n > 10 ? ({color: 'purple'}) : ({color: 'pink'})}>Css dinâmico</h2>

      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>

      {/* css modules */}
      <Title />

    </>
  )
}

export default App
