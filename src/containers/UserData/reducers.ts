import { UserDataAction } from "./actions";
import {
  SAVE_POKEMONS,
  SAVE_POKEMONS_INFO,
  SET_POKEMON_STATUS,
  SAVE_POKEMON_TYPES
} from "./constants";
import {
  Pokemons,
  PokemonInfo,
  UserPokemons,
  PokemonType,
  PokemonTypesDto
} from "../../types/pokemonType";
import { addOrUpdatePokemonStatus } from "../../utils/pokemonInfoUtils";

export interface IUserDataState {
  pokemons: Pokemons;
  pokemonsInfo: PokemonInfo[];
  userPokemons: UserPokemons[];
  pokemonTypes: PokemonTypesDto;
}

const initialState: IUserDataState = {
  pokemons: {} as Pokemons,
  pokemonsInfo: [] as PokemonInfo[],
  userPokemons: [] as UserPokemons[],
  pokemonTypes: {
    count: 20,
    next: null,
    previous: null,
    results: [] as PokemonType[]
  } as PokemonTypesDto
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
    case SAVE_POKEMON_TYPES:
      return {
        ...state,
        pokemonTypes: action.payload.pokemonTypes
      };
    default:
      return state;
  }
};
