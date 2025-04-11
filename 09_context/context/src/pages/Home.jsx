
import "./Home.css"
import ChangeCounter from "../components/ChangeCounter";
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";


const Home = () => {
  // const {counter} = useContext(CounterContext)
  const { counter } = useCounterContext()
  const { color, dispatch } = useTitleColorContext()

  const setTitleColor = (color) => {
    dispatch({type: color})
  }

  return (
    <div>
      <div style={{color: color}}>Home context</div>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("GREEN")}>Verde</button>
      </div>
    </div>
    
  )
}
 
export default Home;

