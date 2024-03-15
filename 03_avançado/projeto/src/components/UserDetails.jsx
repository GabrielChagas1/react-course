import '../index.css'

const UserDetails = ({name, age, profession}) => {
  return (
    <div>
        {
            <div className="card">
                <p>name: {name}</p>
                <p>age: {age}</p>
                <p>profession: {profession}</p>
                {age >= 18 ? <p>Carteira de Habilitação: ✅</p> : <p>Carteira de Habilitação: ❌</p>}
            </div>
                       
        }
    </div>
  )
}

export default UserDetails