import Display from './components/Display';
import Card from './components/Card';
import './App.css'

const pokemonToRender = ["charizard", "pichu", "bulbasaur", "butterfree", "rattata", "jigglypuff", "diglett", "meowth", "gengar", "ditto"]

function App() {
  return (
    <>
      <h1>Memory</h1>
      <Display>
        {pokemonToRender.map((pokemon) => (<><Card pokemonName={pokemon}/></>))}
      </Display>
    </>
  )
}

export default App
