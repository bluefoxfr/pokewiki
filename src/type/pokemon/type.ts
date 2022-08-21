export interface Pokemons {
  name: string;
  url: string;
}

export interface IPokemon {
  name: string;
  id: number;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
    front_shiny: string;
  }
  types: {
    type: {
      name: string;
    }
  }[]
  abilities: {
    ability: {
      name: string;
    }
  }[]
}