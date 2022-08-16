import React, {FunctionComponent, useEffect, useState} from 'react';
import { Header, Title, Input, PokemonsContainer, PokemonCard } from '../../styles/home/home.style';
import axios from 'axios';
import { IPokemon, Pokemons } from '../../type/pokemon/type';


const Home : FunctionComponent = () => {
  const [widthSize, setWidthSize] = useState<number>(200);
  const [oldValue, setOldValue] = useState<number>(0);
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const widthProps = widthSize + 'px';

  useEffect(() => {
    const getPokemon = async() => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
      res.data.results.forEach(async (pokemon: Pokemons) => {
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        setPokemons((p) => [...p, poke.data]);
      })
    }
    getPokemon();
  }, [offset])

  const enlargeInput = (e: any) => {
    const len = e.target.value.length;
    if(len > oldValue && widthSize < 1000) {
      setWidthSize(widthSize + 10);
      setOldValue(len);
    } else if (oldValue > len) {
      setWidthSize(widthSize - 10);
      setOldValue(len);
    }
    if (len === 0) {
      setWidthSize(200);
    }
  }

  const goPrevious = () => {
    if (offset !== 0) {
      setOffset(offset - 20);
      
    }
  }
  const goNext = () => {
    if (offset !== 10000) {
      setOffset(offset + 20);
    }
  }

  return (
    <Header>
      <Title>PokeWiki</Title>
      <Input widthSize={widthProps} keyPress={enlargeInput} />
      <PokemonsContainer>
        {pokemons.map((pokemon) => { return ( <PokemonCard key={pokemon.id} name={pokemon.name} sprite={pokemon.sprites.front_default} height={pokemon.height} weight={pokemon.weight} pokeTypes={pokemon.types} />)})}
      </PokemonsContainer>
      <button type='submit' onClick={goPrevious}>Previous</button>
      <button type='submit' onClick={goNext}>Next</button>
    </Header>
  );
};

export default Home;