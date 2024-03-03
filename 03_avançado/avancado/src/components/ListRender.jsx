import { useState } from 'react'

    const [users, setUsers] = useState([
      {id: 1, name: 'Gabriel', age: 31},
      {id: 2, name: 'Gabriel', age: 31},
      {id: 3, name: 'Gabriel', age: 31}
    ])

    const deleteRandom = () => {
      const randomNumber = Math.floor(Math.random() * 4);
      setUsers((prevUsers) => {
        return prevUsers.filter((user) => randomNumber !== user.id)
      })
    }
