import Display from './components/Display';
import Card from './components/Card';
import './App.css'

const pokemonToRender = ["charizard", "pichu", "bulbasaur", "butterfree", "rattata", "jigglypuff"]

function App() {
  return (
    <>
      <Display>
        {pokemonToRender.map((pokemon) => (<><Card pokemonName={pokemon}/></>))}
      </Display>
    </>
  )
}

export default App
