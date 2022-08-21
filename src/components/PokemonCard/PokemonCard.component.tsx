import React, { FunctionComponent } from 'react';
import { CardContainer, PokeName, Sprite, StatsContainer, SubStat, TypePill, TypesContainer } from './PokemonCard.style';
import { useNavigate, useParams } from "react-router-dom";

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
        {pokeTypes.map((pokeType) => {
            let colorType: string = 'none';
            const getColorType = (name: string) => {
              switch(name) {
                case 'water':
                  colorType = '#6390F0';
                  break;
                case 'fire':
                  colorType = '#EE8130';
                  break;
                case 'normal':
                  colorType = '#A8A77A';
                  break;
                case 'electric':
                  colorType = '#F7D02C';
                  break;
                case 'grass':
                  colorType = '#7AC74C';
                  break;
                case 'ice':
                  colorType = '#96D9D6';
                  break;
                case 'fighting':
                  colorType = '#C22E28';
                  break;
                case 'poison':
                  colorType = '#A33EA1';
                  break;
                case 'ground':
                  colorType = '#E2BF65';
                  break;
                case 'flying':
                  colorType = '#A98FF3';
                  break;
                case 'psychic':
                  colorType = '#F95587';
                  break;
                case 'bug':
                  colorType = '#A6B91A';
                  break;
                case 'rock':
                  colorType = '#B6A136';
                  break;
                case 'ghost':
                  colorType = '#735797';
                  break;
                case 'dragon':
                  colorType = '#6F35FC';
                  break;
                case 'dark':
                  colorType = '#705746';
                  break;
                case 'steel':
                  colorType = '#B7B7CE';
                  break;
                case 'fairy':
                  colorType = '#D685AD';
                  break;
                default:
                  colorType = 'none';
              }
            }
            getColorType(pokeType.type.name);
          return (<TypePill bgColor={colorType}>{pokeType.type.name.toUpperCase()}</TypePill>)})}
      </TypesContainer>
    </CardContainer>
  );
};