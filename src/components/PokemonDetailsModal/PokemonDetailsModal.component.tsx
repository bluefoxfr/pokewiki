import React, { FunctionComponent } from 'react';
import { IPokemon } from '../../type/pokemon/type';
import { PillType } from '../PillType';
import { Button, DarkBackground, DisplayPokemon, HeadSub, PillContainer, Pokename, Sprite, SubStat, SubStats, SubStatsRight, TextSub, TopElement } from './PokemonDetailsModal.style';

type PokemonDetailsModalProps = {
  pokemon: IPokemon;
  onClose: () => void;
};

export const PokemonDetails: FunctionComponent<PokemonDetailsModalProps> = ({
  pokemon,
  onClose,
}) => {
  return (
    <DarkBackground>
      <TopElement>
        <Pokename>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Pokename>
        <DisplayPokemon>
          <SubStats>
            <SubStat><HeadSub>Id</HeadSub><TextSub>#{pokemon.id}</TextSub></SubStat>
            <SubStat><HeadSub>Height</HeadSub><TextSub>{pokemon.height / 10}m</TextSub></SubStat>
            <SubStat><HeadSub>Weight</HeadSub><TextSub>{pokemon.weight / 10}kg</TextSub></SubStat>
          </SubStats>
          <Sprite src={pokemon.sprites.front_default} alt={pokemon.name} />
          <SubStatsRight>
            <HeadSub>Abilities</HeadSub>
            {pokemon.abilities.map((ability) => { return (<SubStat>{ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}</SubStat>)})}
          </SubStatsRight>
        </DisplayPokemon>
        <PillContainer>
          {pokemon.types.map((type) => {return (<PillType key={type.type.name} pillName={type.type.name} /> )})}
        </PillContainer>
      </TopElement>
      <Button name='closeButton' value='Close' onPress={onClose} />
    </DarkBackground>
  )
}
