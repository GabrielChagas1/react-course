import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Destructuring from "./components/Destructuring";
import { Category } from './enum/Category';
import { State } from './components/State';
import { createContext } from 'react';
import Context from './components/Context';

type textOrNull = string | null

type fixed = "Isso" | "ou" | "aquilo"

interface IAppContext {
  language: string;
  framework: string;
  projects: 5
}

export const appContext = createContext<IAppContext | null>(null)

function App() {

  // variáveis
  const name: string = "Gabriel"
  const age: number = 30
  const isWorking: boolean = true

  // funções
  const userGreeting = (name: string): string => {
    return `Olá ${name}!`
  }

  const myText: textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;

  mySecondText = "opa"

  const test: fixed = "Isso"

  const contextValue:IAppContext = {
    language: "javascript",
    framework: "Express",
    projects: 5
  }


  return (
    <appContext.Provider value={contextValue}>
      <h1>Typescript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && (
        <p>Trabalhando.</p>
      )}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name="Maysa" />
      <Destructuring title={"teste"} content={"teste"} commentsQty={3} tags={["sql", "js", "csharp"]} category={Category.TS} />
      <State />
      { myText && <p>Tem texto na variável </p> }
      { mySecondText && <p>Tem texto na segunda variável</p> }
      {test && <p>{test}</p>}
      <Context />
    </appContext.Provider>
  )
}

export default App
