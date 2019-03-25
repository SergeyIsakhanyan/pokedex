interface Egg {
  name: string;
}

export interface PokemonInfo {
  abilities: any;
  base_experience: number;
  forms: any;
  game_indices: any;
  height: number;
  held_items: any;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any;
  order: number;
  name: string;
  species: { name: string; url: string };
  sprites: {
    back_default: string;
    back_female: any;
    back_shiny: string;
    back_shiny_female: any;
    front_default: string;
    front_female: any;
    front_shiny: string;
    front_shiny_female: any;
  };
  stats: any;
  types: any;
  weight: any;
  base_happiness: number;
  capture_rate: number;
  color: { name: string; url: string };
  egg_groups: Array<any>;
  evolution_chain: { url: string };
  evolves_from_species: {
    id: number;
    baby_trigger_item: any;
    chain: string;
  } | null;
  flavor_text_entries: any;
  form_descriptions: any;
  forms_switchable: boolean;
  gender_rate: number;
  genera: any;
  generation: { name: string; url: string };
  growth_rate: { name: string; url: string };
  habitat: { name: string; url: string };
  has_gender_differences: boolean;
  hatch_counter: number;
  is_baby: boolean;
  names: any;
  pal_park_encounters: any;
  pokedex_numbers: any;
  shape: { name: string; url: string };
  varieties: any;
}

export interface PokemonDto {
  abilities: any;
  base_experience: number;
  forms: any;
  game_indices: any;
  height: number;
  held_items: any;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any;
  name: string;
  order: number;
  species: { name: string; url: string };
  sprites: {
    back_default: string;
    back_female: any;
    back_shiny: string;
    back_shiny_female: any;
    front_default: string;
    front_female: any;
    front_shiny: string;
    front_shiny_female: any;
  };
  stats: any;
  types: any;
  weight: any;
}

export interface PokemonSpeciesDto {
  base_happiness: number;
  capture_rate: number;
  color: { name: string; url: string };
  egg_groups: Array<any>;
  evolution_chain: { url: string };
  evolves_from_species: {
    id: number;
    baby_trigger_item: any;
    chain: string;
  } | null;
  flavor_text_entries: any;
  form_descriptions: any;
  forms_switchable: boolean;
  gender_rate: number;
  genera: any;
  generation: { name: string; url: string };
  growth_rate: { name: string; url: string };
  habitat: { name: string; url: string };
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  name: string;
  names: any;
  order: number;
  pal_park_encounters: any;
  pokedex_numbers: any;
  shape: { name: string; url: string };
  varieties: any;
}

export interface Pokemons {
  count: number;
  next: string;
  previous: string | null;
  results: PokemonDto[];
}

export interface PokemonStatus {
  favorite: boolean;
  trade: boolean;
  wished: boolean;
  [key: string]: boolean;
}

export interface UserPokemons {
  pokemonId: number;
  pokemonStatus: PokemonStatus;
}

export interface PokemonType {
  name: string;
  url: string;
}

export interface PokemonTypesDto {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonType[];
}
