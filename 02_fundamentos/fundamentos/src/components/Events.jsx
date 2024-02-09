
const Events = () => {
  function handleTeste(){
    alert('aqui')
  }

  let name = 'Gabriel'

  return (
    <div>
        <div>
            <button onClick={() => name === 'Gabriel' ? alert('teste'): alert('teste 2')}>Clique aqui!</button>
        </div>
    </div>
  )
}

export default Events