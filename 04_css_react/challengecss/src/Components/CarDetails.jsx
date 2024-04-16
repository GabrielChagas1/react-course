import styles from './CarDetails.module.css'

const CarDetails = ({name, color, value, available}) => {
  return (
    <>
        {
            <div className={styles.card}>
                <p>name: {name}</p>
                <p>color: {color}</p>
                <p>value: R${value}</p>
                { available ? <p>Disponível: ✅</p> : <p>Disponível: ❌</p>}
            </div>
                       
        }
    </>
  )
}

export default CarDetails