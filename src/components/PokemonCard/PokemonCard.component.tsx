import React, { FunctionComponent } from 'react';
import { useNavigate } from "react-router-dom";
import { PillType } from '../PillType';
import { CardContainer, PokeName, Sprite, StatsContainer, SubStat, TypesContainer } from './PokemonCard.style';

type pokeType = {
  type: {
    name: string;
  }
}

type PokemonCardProps = {
  name: string;
  sprite: string;
  height: number;
  weight: number;
  pokeTypes: pokeType[];
}

export const PokemonCard : FunctionComponent<PokemonCardProps> = ({name, sprite, height, weight, pokeTypes, ...props}) => {
  const router = useNavigate();
  const goDetails = () => {
    router("details?id=" + name);
  }
  return (
    <CardContainer {...props} onClick={goDetails}>
      <Sprite src={sprite} alt={name} />
      <PokeName>{name.charAt(0).toUpperCase() + name.slice(1)}</PokeName>
      <StatsContainer>
        <SubStat>Height:<br/>{height}</SubStat>
        <SubStat>Weight:<br/>{weight}</SubStat>
      </StatsContainer>
      <TypesContainer>
      {pokeTypes.map((type) => {return (<PillType key={type.type.name} pillName={type.type.name} /> )})}
      </TypesContainer>
    </CardContainer>
  );
};