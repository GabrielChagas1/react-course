const Challenge = () => {

    const a = 10;
    const b = 15

    function handleSum(){
        alert(a+b)
    }

  return (
    <div>
        <p>A: {a}</p>
        <p>B: {b}</p>
        <button onClick={handleSum}>Clique para ver a soma!</button>
    </div>
  )
}

export default Challenge