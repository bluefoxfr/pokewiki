import React, {FunctionComponent, useEffect, useRef, useState} from 'react';
import { Header, Title, Input, PokemonsContainer, PokemonCard, Button, BottomContainer } from '../styles/home/home.style';
import axios from 'axios';
import { IPokemon } from '../type/pokemon/type';
import { PokemonDetailsModal } from '../components/PokemonDetailsModal';

type pokeType = {
  type: {
    name: string;
  }
}

type pokeDetails = {
  name: string;
  sprite: string;
  height: number;
  weight: number;
  pokeTypes: pokeType[];
};

const Home : FunctionComponent = () => {
  const [widthSize, setWidthSize] = useState<number>(200);
  const [oldValue, setOldValue] = useState<number>(0);
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [detailsModal, setDetailsModal] = useState<boolean>(false);
  const [pokeDetails, setPokeDetails] = useState<pokeDetails>();
  const widthProps = widthSize + 'px';
  const goRequest = useRef(true);

  useEffect(() => {
    if (goRequest.current) {
      goRequest.current = false;
    const getPokemon = async() => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
      for(let i = 0; i < 20; i++) {
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${res.data.results[i].name}`);
        setPokemons((p) => [...p, poke.data]);
      }
    }
    getPokemon();
  }
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

  const goNext = () => {
    if (offset !== 10000) {
      setOffset(offset + 20);
    }
    goRequest.current = true;
    console.log('Next page charged');
  }

  const viewDetails = (pokemon: IPokemon) => {
    let ourPokeDetails: pokeDetails = {
      name: pokemon.name,
      sprite: pokemon.sprites.front_default,
      height: pokemon.height,
      weight: pokemon.weight,
      pokeTypes: pokemon.types,
    }
    setPokeDetails(ourPokeDetails);
    setDetailsModal(true);
  }

  return (
    <Header>
      <Title>PokeWiki</Title>
      <Input widthSize={widthProps} keyPress={enlargeInput} />
      <PokemonsContainer>
        {pokemons.map((pokemon) => { return ( <PokemonCard key={pokemon.id} name={pokemon.name} sprite={pokemon.sprites.front_default} height={pokemon.height} weight={pokemon.weight} pokeTypes={pokemon.types} />)})}
      </PokemonsContainer>
      <BottomContainer>
        <Button name={'buttonNext'} onPress={goNext}  value={'Next'}/>
      </BottomContainer>
      {detailsModal && pokeDetails ? 
        <PokemonDetailsModal name={pokeDetails.name} sprite={pokeDetails.sprite} height={pokeDetails.height} weight={pokeDetails.weight} pokeTypes={pokeDetails.pokeTypes} onClose={() => setDetailsModal(false)} />
    : null}
    </Header>
  );
};

export default Home;