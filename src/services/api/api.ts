import { HttpClient } from "./httpClient";
import { PokemonDto, PokemonSpeciesDto } from "../../types/pokemonType";
const POKEMONS_LIMIT = 20;
export const POKEMONS_OFFSET = 0;
export enum Method {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE"
}

const SERVER_URL = `https://pokeapi.co/api/v2`; // process.env.REACT_APP_SERVER_URL;

export class Api {
  public static async getPokemons(offset: number = 0): Promise<{}> {
    const path = `/pokemon-species/?limit=${POKEMONS_LIMIT}&offset=${offset}`;
    return HttpClient.call<PokemonDto>(
      `${SERVER_URL}${path}`,
      Method.GET,
      {},
      {}
    );
  }

  public static async getPokemonInfo(name: string): Promise<PokemonDto> {
    const path = `/pokemon/${name}`;
    const response = await HttpClient.call<PokemonDto>(
      `${SERVER_URL}${path}`,
      Method.GET,
      {},
      {}
    );
    return response.data;
  }

  public static async getPokemonSpeciesInfo(
    name: string
  ): Promise<PokemonSpeciesDto> {
    const path = `/pokemon-species/${name}`;
    const response = await HttpClient.call<PokemonSpeciesDto>(
      `${SERVER_URL}${path}`,
      Method.GET,
      {},
      {}
    );
    return response.data;
  }
}
