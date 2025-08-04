const express = require("express")
const app = express()

app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(express.json())

// rotas - endpoints
app.get('/', (req, res) => {
  res.json({message: 'Primeira rota criada com sucess!.'})
})

app.post('/createproduct', (req, res) => {
  const name = req.body.name
  const price = req.body.price

  console.log(name)
  console.log(price)

  if(!name) {
    res.status(422).json({ message: 'O campo nome é obrigatório!'})
  }

  res.status(201).json({
    name,
    price,
    message: 'Produto criado com sucesso.'
  })

})

app.listen(3000)