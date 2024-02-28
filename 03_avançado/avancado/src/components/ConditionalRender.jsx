import { useState } from "react"

export const ConditionalRender = () => {

    const [x] = useState(false)

    const [name] = useState('Gabriel')

  return (
    <div>
        <h1>Isso será exibido ?</h1>
        {x && <p>Gabriel</p>}

        <h1>If ternário</h1>
        {name === 'Gabriel' ? (
            <p>São Paulo</p>
        ) : (
            <p>Palmeiras</p>
        )}
    </div>
  )
}
