import React, { FunctionComponent } from 'react';
import { Button } from '../Button';
import { DarkBackground, Pokename } from './PokemonDetailsModal.style';

type pokeType = {
  type: {
    name: string;
  }
}

type PokemonDetailsModalProps = {
  name: string;
  sprite: string;
  height: number;
  weight: number;
  pokeTypes: pokeType[];
  onClose: () => void;
};

export const PokemonDetailsModal: FunctionComponent<PokemonDetailsModalProps> = ({
  name,
  sprite,
  height,
  weight,
  pokeTypes,
  onClose,
}) => {
  return (
    <DarkBackground>
      <Pokename>{name}</Pokename>
      <Button name='closeButton' value='Close' onPress={onClose} />
    </DarkBackground>
  )
}
