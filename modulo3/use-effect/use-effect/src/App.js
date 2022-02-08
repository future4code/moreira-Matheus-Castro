import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";

export default function App ()  {
  
  const [pokeList, setPokeList] = useState([]);
  
  const [pokeName, setPokeName] = useState("");


  // método que roda após a montagem do componente

const puxaPokemons = () => {
  axios       
     .get("https://pokeapi.co/api/v2/pokemon/?limit=151")       
     .then(response => {setPokeList(response.data.results)      
     })       
     .catch(err => {
      console.log(err);
    })  
  }

  useEffect(() => {    
    
    puxaPokemons()
           
  },[])          

  const changePokeName = (event) => {setPokeName(event.target.value)};

    return (
      <div className="App">
        <select onChange={changePokeName}>
          <option value={pokeName}>Nenhum</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
    );
  


}
