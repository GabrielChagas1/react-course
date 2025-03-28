import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null)

  // 5 - refatorando post
  const [config, setConfig] = useState(null)
  const [method, setMethod] = useState(null)
  const [callFetch, setCallFetch] = useState(null)

  // 6 - loading
  const [loading, setLoading] = useState(false)

  // 7 - tratando erros
  const [error, setError] = useState(null)

  // 8 - Desafio
  const [itemId, setItemId] = useState(null)

  const httpConfig = (data, method) => {
    if(method === "POST"){
      setConfig({
        method,
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })

      setMethod(method)
    }else if(method === "DELETE"){
      setConfig({
        method,
        headers: {
          "Content-type": "application/json"
        },
      })
      setMethod(method)
      setItemId(data)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(url)
        const json = await res.json()
        setData(json)
      } catch (err) {
        console.log(err)
        setError('Houve algum erro ao carregar os dados!')
      }
      setLoading(false)
    }
    fetchData()
  }, [url, callFetch]);

  // 5 - refatorand post
  useEffect(() => {
    const httpRequest = async () => {
      if(method === "POST") {
        let fetchOptions = [url, config]
        const res = await fetch(...fetchOptions)
        const json = await res.json()
        setCallFetch(json)
      }
      if(method === "DELETE") {
        const deleteUrl = `${url}/${itemId}`
        const res = await fetch(deleteUrl, config)
        const json = await res.json()
        setCallFetch(json)
      }
    }
    httpRequest()
  }, [config, method, url, error])
 

  return {data, httpConfig, loading}
}