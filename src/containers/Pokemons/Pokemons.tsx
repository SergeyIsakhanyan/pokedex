import React, { PureComponent } from "react";
import {
  PokemonInfo,
  UserPokemons,
  PokemonStatus
} from "../../types/pokemonType";
import PokemonCard from "../../components/Pokemon";
import "../../styles/Pokemons.scss";

export interface IPokemonsProps {
  pokemonsInfo: PokemonInfo[];
  userPokemons: UserPokemons[];
  setPokemonStatus: (pokemonId: number, pokemonStatus: PokemonStatus) => void;
}

export interface IPokemonsState {
  userPokemons: UserPokemons[];
}

const defaultPokemonStatus = {
  trade: false,
  wished: false,
  favorite: false
};

export default class Pokemons extends PureComponent<IPokemonsProps> {
  constructor(props: IPokemonsProps) {
    super(props);
    this.state = {
      userPokemons: this.props.userPokemons
    };
  }

  static getDerivedStateFromProps(
    newPorps: IPokemonsProps,
    prevState: IPokemonsState
  ) {
    if (newPorps.userPokemons !== prevState.userPokemons) {
      return {
        userPokemons: newPorps.userPokemons
      };
    }
    return null;
  }

  public onClick = (name: string, id: number) => {
    let selectedPokemon = this.props.userPokemons.find(
      item => item.pokemonId === id
    );
    if (selectedPokemon) {
      this.props.setPokemonStatus(id, {
        ...selectedPokemon.pokemonStatus,
        [name]: !selectedPokemon.pokemonStatus[name]
      });
    } else {
      this.props.setPokemonStatus(id, {
        ...defaultPokemonStatus,
        [name]: true
      });
    }
  };

  public getPokemonStatus = (id: number) => {
    let userPokemon = this.props.userPokemons.find(
      item => item.pokemonId === id
    );
    if (userPokemon) {
      return userPokemon.pokemonStatus;
    } else {
      return {
        trade: false,
        wished: false,
        favorite: false
      } as PokemonStatus;
    }
  };

  public render() {
    return (
      <div className="pokemons-container">
        {this.props.pokemonsInfo.map(item => (
          <PokemonCard
            key={item.id}
            data={item}
            onClick={this.onClick}
            pokemonStatus={this.getPokemonStatus(item.id)}
          />
        ))}
      </div>
    );
  }
}
