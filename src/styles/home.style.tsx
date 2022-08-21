import styled from 'styled-components';
import { Input as _Input } from '../components/Input';
import { PokemonCard as _PokemonCard } from '../components/PokemonCard';
import { Button as _Button } from '../components/Button';

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
  margin: 10px;
`;

export const PokemonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin: 0 50px;
`;

export const PokemonCard = styled(_PokemonCard)`
  margin: 20px;
`;

export const BottomContainer = styled.div`
  display: flex;
  margin: 50px 0;
`;

export const Button = styled(_Button)`
  margin: 0 10px;
`;