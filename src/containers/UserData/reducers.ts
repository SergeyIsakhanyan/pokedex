import { UserDataAction } from "./actions";
import { SAVE_POKEMONS, SAVE_POKEMONS_INFO } from "./constants";
import { Pokemons, PokemonDto, PokemonInfo } from "../../types/pokemonType";

export interface IUserDataState {
  pokemons: Pokemons;
  pokemonsInfo: PokemonInfo[];
}

const initialState: IUserDataState = {
  pokemons: {} as Pokemons,
  pokemonsInfo: [] as PokemonInfo[]
};

export const userDataReducer = (
  state: IUserDataState = initialState,
  action: UserDataAction
) => {
  switch (action.type) {
    case SAVE_POKEMONS:
      console.log(action.payload.pokemons);
      return {
        ...state,
        pokemons: action.payload.pokemons
      };
    case SAVE_POKEMONS_INFO:
      return {
        ...state,
        pokemonsInfo: action.payload.pokemonsInfo
      };
    default:
      return state;
  }
};
