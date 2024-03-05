import React, { useState } from 'react'
import ShowUserName from './showUserName';

    const someData = 10;

    function handleGetNumber(){
      setNumber(document.getElementsByClassName('name')[0].value)
    }

    const [number, setNumber] = useState('teste');

  return (
    <div>
        <p>Valor: {number}</p>
        <input className="name" type="text" onKeyUp={handleGetNumber} />
        <ShowUserName name={number} />
    </div>
  )
