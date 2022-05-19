import React, {useState, useEffect} from 'react';
import {capitalizeFirstLetter} from "../utils/Helper"
import './Card.scss';

const Card = (props) => {
  const [pokemonData, setPokemonData] = useState({});
  
  useEffect(()=> {
    fetchPokemonDetail();
  }, [])

  const fetchPokemonDetail = async () => {
    const response = await fetch(props.url);
    
    if (response.status !== 200) {
      alert("We encountered some issue with last request.");
    } 

    const res = await response.json();
    const abilities = res?.abilities.map((el) => el.ability?.name)
    setPokemonData({...res, abilitiesStr: abilities.join(', ')});
  }

  return (
    <>
      <div className='card-container'>
        <div className='card-body'>
          <img 
            src={pokemonData?.sprites?.other['official-artwork']['front_default']} 
            alt={pokemonData.name} 
            data-testid="pokemon-image" 
            className='pokemon-image'
          />
          <div className="pokemon-data">
            <div className="pokemon-name" data-testid="pokemon-name" >{capitalizeFirstLetter(pokemonData?.name || '')}</div>
            <span className='pokemon-specifics' data-testid="pokemon-specifics" >{`Height: ${pokemonData?.height} | Weight: ${pokemonData?.weight}`}</span>
            <br />
            <span className='pokemon-specifics' data-testid="pokemon-abilities" >Abilities: {pokemonData?.abilitiesStr}</span>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Card;