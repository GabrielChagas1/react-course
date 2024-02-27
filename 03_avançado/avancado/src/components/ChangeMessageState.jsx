import React from 'react'

const ChangeMessageState = ({handleMessage}) => {

    function handleKeyUp(event) {
        const valorDoCampo = event.target.value;
        handleMessage(valorDoCampo);
      }

  return (
    <>
        <input className="name" type="text" onKeyUp={handleKeyUp} />
    </>
  )
}

export default ChangeMessageState