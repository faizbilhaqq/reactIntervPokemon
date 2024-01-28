import logo from './logo.svg';
import './App.css';
import { getPokemonList, getPokemonDescription, getPokemonSpriteUrl } from "./utils";
import { useEffect, useState } from 'react';



function App() {


  async function logData() {
    const list = await getPokemonList();
    console.log(list);
  
    // const pokemon = await getPokemonDescription();
    // console.log(pokemon);
  }

  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonImage, setPokemonImage] = useState(1);
  const [pokemonDesc, setPokemonDesc] = useState(1);
  const [descPokemon, setDescPokemon] = useState("");
  // const getDesc = async (pokemonDesc) =>{
  //   const desc = await getPokemonDescription(pokemonDesc)
  //   return desc
  // }


  useEffect(()=>{
    const getData = async () => {
      const apiData = await getPokemonList()
      const descData = await getPokemonDescription(pokemonDesc)
      
      setDescPokemon(descData)
      setPokemonList(apiData)
    }

    getData()

    
  }, [pokemonDesc])

  const pokemonNames = pokemonList.map((pokemon, idx)=>
  
        <option value={idx + 1} key={idx}  > {pokemon.name} </option>
  )


  return (
    <div className="App">
      <div className="content">
        <h1>dsjafdasf</h1>
        <select onChange={(e)=> {
          setPokemonImage(e.target.value )
          setPokemonDesc(e.target.value)
          } } >
         {pokemonNames}
        </select>


        <img src={getPokemonSpriteUrl( pokemonImage )} />
        <p>this is desc</p>
        <p> {descPokemon} </p>
      </div>
    </div>
  );
}

export default App;
