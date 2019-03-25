import { chipColors } from "./chipColors";
import { PokemonStatus, UserPokemons } from "../types/pokemonType";

interface FlavorTextEntries {
  flavor_text: string;
  language: { name: string; url: string };
  version: any;
}

export const getEnglishText = (
  flavor_text_entries: FlavorTextEntries[]
): string | null => {
  let text = flavor_text_entries.find(
    (item: FlavorTextEntries) => item.language.name === "en"
  );
  return text ? text.flavor_text : null;
};

export const upperFirstLetter = (value: string): string => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const getChipColor = (name: string) => {
  return chipColors[name];
};

export const addOrUpdatePokemonStatus = (
  pokemonId: number,
  pokemonStatus: PokemonStatus,
  userPokemons: UserPokemons[]
) => {
  let existingPokemonIndex = userPokemons.findIndex(
    item => item.pokemonId === pokemonId
  );

  if (existingPokemonIndex === -1) {
    userPokemons.push({ pokemonId, pokemonStatus });
    return userPokemons;
  } else {
    userPokemons[existingPokemonIndex] = { pokemonId, pokemonStatus };
    return userPokemons;
  }
};
