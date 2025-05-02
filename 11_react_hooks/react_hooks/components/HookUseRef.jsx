import { useEffect, useRef, useState } from "react";

const HookUseRef = () => {
  const numberRef = useRef(0)
  const [counter, setCounter] = useState(0)
  const [counterB, setCounterB] = useState(0)

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
  })

  const inputRef = useRef()
  const [text,  setText] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    setText("")
    inputRef.current.focus()
  }

  return ( 
   <div>
     <h2>useRef</h2>
      <p>o Componente redenrizou: {numberRef.current}</p>
      <p>Counter A: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Contador A</button>
      <p>Counter B: {counterB}</p>
      <button onClick={() => setCounterB(counter + 1)}>Contador B</button>
      {/* 2 - useRef e DOM */}
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)} />
        <input type="submit" value="Enviar" />
      </form>
      <hr />
   </div>
   );
}
 
export default HookUseRef;