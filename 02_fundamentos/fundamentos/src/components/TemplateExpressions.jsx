import React from 'react'

export const TemplateExpressions = () => {

    const name = 'Gabriel'
    const data = {
        age: 25,
        job: 'Programador'
    }

  return (
    <div>
        <h3>Olá sou o {name}, tudo bem ?</h3>
        <h3>tenho {data.age} anos e sou {data.job}</h3>
    </div>
  )
}
