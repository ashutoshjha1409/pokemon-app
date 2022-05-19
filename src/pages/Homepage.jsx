import React, {useEffect, useState} from 'react';
import Select from 'react-select'
import {pageDetails, availableLimits} from '../utils/Helper';
import Card from "../components/Card";
import './Homepage.scss'

const Homepage = () => {
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() =>{
    fetchPokemonList(pageDetails.defaultUrl);
  }, []);

  const fetchPokemonList = async (url) => {
    if (url === null)
      return false;

    const response = await fetch(url);
    if (response.status !== 200) {
      alert("We encountered some issue with last request.");
    } 
    const res = await response.json();
    setPokemonData(res);
  }

  return (
      <>
        <div>
          <h2 data-testid="page-heading" >Pokémons</h2>
        </div>
        <div className='action-items max-width' >
          <Select options={availableLimits} />
          <div className='pagination-buttons' data-testid="pagination-buttons-top">          
            <button onClick={() => fetchPokemonList(pokemonData.previous)}>            
              <span>Prev</span>
            </button>
            
            <button onClick={() => fetchPokemonList(pokemonData.next)}>Next</button>
          </div>
        </div>
        <div className='card-list max-width' data-testid="card-list-container">
          {
            pokemonData?.results?.map((pokemon) => (
              <Card {...pokemon} key={pokemon.name}/>
            ))
          }
        </div>
        <div className='pagination-buttons max-width bottom-buttons' data-testid="pagination-buttons-bottom">
          <button onClick={() => fetchPokemonList(pokemonData.previous)} disabled={pokemonData.previous === null}>
            
            <span>Prev</span>
          </button>
          <button onClick={() => fetchPokemonList(pokemonData.next)} disabled={pokemonData.next === null}>
            
            <span>Next</span>
          </button>
        </div>
      </>
  );
}

export default Homepage;

