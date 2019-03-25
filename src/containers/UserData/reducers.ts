import { UserDataAction } from "./actions";
import {
  SAVE_POKEMONS,
  SAVE_POKEMONS_INFO,
  SET_POKEMON_STATUS
} from "./constants";
import { Pokemons, PokemonInfo, UserPokemons } from "../../types/pokemonType";
import { addOrUpdatePokemonStatus } from "../../utils/pokemonInfoUtils";

export interface IUserDataState {
  pokemons: Pokemons;
  pokemonsInfo: PokemonInfo[];
  userPokemons: UserPokemons[];
}

const initialState: IUserDataState = {
  pokemons: {} as Pokemons,
  pokemonsInfo: [] as PokemonInfo[],
  userPokemons: [] as UserPokemons[]
};

export const userDataReducer = (
  state: IUserDataState = initialState,
  action: UserDataAction
) => {
  switch (action.type) {
    case SAVE_POKEMONS:
      return {
        ...state,
        pokemons: action.payload.pokemons
      };
    case SAVE_POKEMONS_INFO:
      return {
        ...state,
        pokemonsInfo: action.payload.pokemonsInfo
      };
    case SET_POKEMON_STATUS:
      let userPokemons = addOrUpdatePokemonStatus(
        action.payload.pokemonId,
        action.payload.pokemonStatus,
        state.userPokemons
      );
      return {
        ...state,
        userPokemons: [...userPokemons]
      };
    default:
      return state;
  }
};
