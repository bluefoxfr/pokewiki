import axios from 'axios';
import React, {FunctionComponent, useEffect, useRef, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PokemonDetailsModal } from '../components/PokemonDetailsModal';
import { IPokemon } from '../type/pokemon/type';

const Details: FunctionComponent = () => {
  const [pokemon, setPokemons] = useState<IPokemon>();
  const goRequest = useRef(true);
  function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  let query = useQuery();
  let id = query.get("id");
  useEffect(() => {
    if (goRequest.current) {
      goRequest.current = false;
      const getPokemon = async() => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemons(res.data);
      }
      getPokemon();
    }
  }, [id])
  const router = useNavigate();
  const back = () => {
    router("/");
  }
  return (
    <>
      {pokemon ? <PokemonDetailsModal name={pokemon.name} height={pokemon.height} weight={pokemon.weight} sprite={pokemon.sprites.front_default} pokeTypes={pokemon.types} onClose={back} /> : null}
    </>
  )
}

export default Details;