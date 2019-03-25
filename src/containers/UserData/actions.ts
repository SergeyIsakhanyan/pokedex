import {
  GET_POKEMONS,
  SAVE_POKEMONS,
  GET_POKEMONS_INFO,
  SAVE_POKEMONS_INFO,
  SET_POKEMON_STATUS,
  SAVE_POKEMON_TYPES
} from "./constants";
import {
  Pokemons,
  PokemonDto,
  PokemonInfo,
  PokemonStatus,
  PokemonType,
  PokemonTypesDto
} from "../../types/pokemonType";

interface IGetPokemons {
  type: typeof GET_POKEMONS;
}

interface ISavePokemons {
  type: typeof SAVE_POKEMONS;
  payload: { pokemons: Pokemons };
}

interface IGetPokemonsInfo {
  type: typeof GET_POKEMONS_INFO;
}

interface ISavePokemonsInfo {
  type: typeof SAVE_POKEMONS_INFO;
  payload: {
    pokemonsInfo: PokemonInfo[];
  };
}

interface ISavePokemonTypes {
  type: typeof SAVE_POKEMON_TYPES;
  payload: {
    pokemonTypes: PokemonTypesDto;
  };
}

interface ISetPokemonStatus {
  type: typeof SET_POKEMON_STATUS;
  payload: {
    pokemonId: number;
    pokemonStatus: PokemonStatus;
  };
}

export type UserDataAction =
  | IGetPokemons
  | ISavePokemons
  | IGetPokemonsInfo
  | ISavePokemonsInfo
  | ISetPokemonStatus
  | ISavePokemonTypes;

export class UserDataActions {
  public static getPokemons(): IGetPokemons {
    return {
      type: GET_POKEMONS
    };
  }

  public static savePokemons(pokemons: Pokemons): UserDataAction {
    return {
      type: SAVE_POKEMONS,
      payload: { pokemons }
    };
  }

  public static getPokemonsInfo(): UserDataAction {
    return {
      type: GET_POKEMONS_INFO
    };
  }

  public static savePokemonsInfo(pokemonsInfo: PokemonInfo[]): UserDataAction {
    return {
      type: SAVE_POKEMONS_INFO,
      payload: { pokemonsInfo }
    };
  }

  public static setPokemonStatus(
    pokemonId: number,
    pokemonStatus: PokemonStatus
  ): UserDataAction {
    return {
      type: SET_POKEMON_STATUS,
      payload: {
        pokemonId,
        pokemonStatus
      }
    };
  }

  public static savePokemonTypes(pokemonTypes: PokemonTypesDto): UserDataAction {
    return {
      type: SAVE_POKEMON_TYPES,
      payload: {
        pokemonTypes
      }
    };
  }
}
