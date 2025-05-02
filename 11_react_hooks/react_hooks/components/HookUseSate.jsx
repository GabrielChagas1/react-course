import { useState } from "react"

const HookUseState = () => {
  let username = "Gabriel";
  const [name, setName] = useState("Maysa")

  const changeNames = () => {
    username = "Gabriel Chagas"
    setName("Maysa Oliveira")
  }


  const [age, setAge] = useState(18)
  const handleSubmit = (e) => {
    e.preventDefault()
    // envio a uma api
    console.log(age)
  }

  return (
    <div>
      <h2>UseState</h2>
      <p>Variável: {username}</p>
      <p>UseState: {name}</p>
      <button onClick={changeNames}>Mudar nomes</button>
      {/* useState e input*/}
      <p>digite sua idade</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        <input type="submit" value="enviar" />
      </form>
      <p>Você tem {age} anos</p>
      <hr />
    </div>
   );
}
 
export default HookUseState;