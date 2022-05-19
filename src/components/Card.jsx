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
          <img src={pokemonData?.sprites?.other['official-artwork']['front_default']} width="200" height="300" alt={pokemonData.name}/>
          <div className="pokemon-data">
            <div className="pokemon-name">{capitalizeFirstLetter(pokemonData?.name || '')}</div>
            <span className='pokemon-specifics'>{`Height: ${pokemonData?.height} | Weight: ${pokemonData?.weight}`}</span>
            <br />
            <span className='pokemon-specifics'>Abilities: {pokemonData?.abilitiesStr}</span>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Card;