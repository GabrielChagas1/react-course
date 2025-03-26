import './App.css'
import { useState, useEffect } from 'react'
import { useFetch } from './hooks/useFetch';

function App() {

  const url = "http://localhost:3000/products";
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 4 - Custom Hook
  const {data: items, httpConfig, loading, error} = useFetch(url)

  // 1 - resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await fetch(url);
  //       const data = await res.json();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error("Erro ao buscar os dados:", error);
  //     }
  //   }
  
  //   fetchData();
  // }, []);

  // 2 - add de products
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price
    };

    // 5 - refatorando POST
    httpConfig(product, "POST")


    setName("");
    setPrice("");

  } 

  // 2 - add de products
  const handleRemove = async (id) => {
  
    httpConfig(id, "DELETE")

  } 
  

  return (
    <>
      <h1>Lista de Produtos</h1>
      {/* loading   */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
            <button onClick={() => handleRemove(product.id)}>delete</button>
          </li>
        ))}
        </ul>
      )}
     
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)} />
            </label>
          <label>
            Price: 
            <input type="number" value={price} name='name' onChange={(e) => setPrice(e.target.value)} />
          </label>
          {/* 07 - state de loading no botão */}
          {!loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="add" />}
        </form>
          
          
      </div>
    </>
  )
}

export default App
