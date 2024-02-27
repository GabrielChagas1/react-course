import React from 'react'

    function handleKeyUp(event) {
        const valorDoCampo = event.target.value;
        handleMessage(valorDoCampo);
      }

  return (
    <>
        <input className="name" type="text" onKeyUp={handleKeyUp} />
    </>
  )
