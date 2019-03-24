import {
  GET_POKEMONS,
  SAVE_POKEMONS,
  GET_POKEMONS_INFO,
  SAVE_POKEMONS_INFO
} from "./constants";
import { Pokemons, PokemonDto, PokemonInfo } from "../../types/pokemonType";

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

export type UserDataAction =
  | IGetPokemons
  | ISavePokemons
  | IGetPokemonsInfo
  | ISavePokemonsInfo;

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
}
