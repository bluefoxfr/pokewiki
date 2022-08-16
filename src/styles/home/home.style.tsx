import styled from 'styled-components';
import { Input as _Input } from '../../components/Input';
import { PokemonCard as _PokemonCard } from '../../components/PokemonCard';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 96px;
  color: #F4F4F4;
`;

export const Input = styled(_Input)<{widthSize: string}>`
  width: ${({widthSize}) => widthSize};
  height: 70px;
`;

export const PokemonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;

export const PokemonCard = styled(_PokemonCard)`
  margin: 20px;
`;