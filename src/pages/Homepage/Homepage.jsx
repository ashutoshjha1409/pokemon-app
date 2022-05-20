import React, {useEffect, useState} from 'react';
import Select from 'react-select'
import {pageDetails, availableLimits} from '../../utils/Helper';
import Card from "../../components/Card/Card";
import './Homepage.scss'

const Homepage = () => {
  const [pokemonData, setPokemonData] = useState({});
  const [isButtonDisabled, setButtonDisabled] = useState({
    prev: false,
    next: false
  })

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
    const isButtonDisabled = {
      prev: false,
      next: false
    }
    if(res.previous === null) isButtonDisabled.prev = true;
    if(res.next === null) isButtonDisabled.next = true;
    console.log(isButtonDisabled, res)
    setButtonDisabled(isButtonDisabled);
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
            <button 
              onClick={() => fetchPokemonList(pokemonData.previous)}  
              disabled={isButtonDisabled.prev}
            >            
              Prev
            </button>            
            <button 
              onClick={() => fetchPokemonList(pokemonData.next)}  
              disabled={isButtonDisabled.next}
            >
              Next
            </button>
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
          <button 
            onClick={() => fetchPokemonList(pokemonData.previous)} 
            disabled={isButtonDisabled.prev}
          >            
            Prev
          </button>
          <button 
            onClick={() => fetchPokemonList(pokemonData.next)} 
            disabled={isButtonDisabled.next}
          >            
            Next
          </button>
        </div>
      </>
  );
}

export default Homepage;

