import { useState } from 'react'
import styles from './MyForm.module.css'

const MyForm = ({user}) => {

  const [name, setName] = useState(user ? user.name : '')
  const [email, setEmail] = useState(user ? user.email : '')
  const [bio, setBio] = useState(user ? user.bio : '')
  const [role, setRole] = useState(user ? user.role : '')

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enviando o formulário')
    console.log(name, email, bio, role)
    setName('')
    setEmail('')
    setBio('')
    setRole('')
  }

//   console.log(name)
//   console.log(email)

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name='name' placeholder='Digite o seu nome' onChange={handleName} value={name} />
            </div>
            {/* label envolvendo input */}
            <label>
                <span>Email</span>
                <input type="email" name='email' placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)} value={email} />
            </label>
            <label>
                <span>Bio: </span>
                <textarea name="bio" placeholder='Descrição' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            <label>
                <span>Role</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <input type="submit" value='Enviar' />
        </form>
    </div>
  )
}

export default MyForm