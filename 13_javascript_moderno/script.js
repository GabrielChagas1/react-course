// 1 - var, let e const
var x = 10
var y = 15


if(y > 10) {
  var x = 5
  console.log(x)
}

console.log(x)


let a = 10
let b = 15

if(b > 10) {
  let a = 5
  console.log(a)
}

console.log(a)


function LogName(){
  const name = 'Gabriel'
  console.log(name)
}

const name = 'Maysa'
LogName()
console.log(name)


// 2 - arrow function
const sum = function sum(a, b) {
  return a + b
}


const arrowSum = (a, b) => a + b

console.log(sum(5, 5))
console.log(arrowSum(5, 5))

const greeting = (name) => {
  let greeting = ''
  name ?  greeting = `Olá ${name}` : greeting = 'Olá'
  return greeting
}

console.log(greeting('Gabriel'))
console.log(greeting())

const testeArrow = () => console.log('Testou')

testeArrow()

const user = {
  name: "Gabriel",
  sayUserName(){
    setTimeout(function() {
      console.log(this)
      console.log(`Username: ${this.name}`)
    }, 500)
  },
  sayUserNameArrow(){
    setTimeout(() => {
      console.log(this)
      console.log(`Username: ${this.name}`)
    }, 700)
  }
}

// user.sayUserName();
// user.sayUserNameArrow();

// 3 - Filter

const arr = [1, 2, 3, 4 , 5]

const highNumber = arr.filter(x => x >= 3);

console.log(arr, highNumber)

const users = [
  {name: "Gabriel", available: true},
  {name: "Maysa", available: false},
  {name: "Luiz", available: true},
  {name: "Raquel", available: false},
]

const usersNotAvailable = users.filter((x) => !x.available);
const usersAvailable = users.filter((x) => x.available)

console.log(usersAvailable, usersNotAvailable)

// 4 - Map
const produtos = [
  {name: "Camisa", price: 10.90, category: "Roupas"},
  {name: "Chaleira Elétrica", price: 10.90, category: "Eletro"},
  {name: "Fogão", price: 10.90, category: "Eletro"},
  {name: "Camisa", price: 10.90, category: "Roupas"}
]

produtos.map((product) => {
  if(product.category === "Roupas")
    product.onSale = true
})

console.log(produtos)

