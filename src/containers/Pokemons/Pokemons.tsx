import React, { PureComponent } from "react";
import {
  PokemonInfo,
  UserPokemons,
  PokemonStatus
} from "../../types/pokemonType";
import PokemonCard from "../../components/Pokemon";
import "../../styles/Pokemons.scss";
import SortContainer from "./Sort";
import { sortPokemons } from "../../utils/pokemonInfoUtils";

export interface IPokemonsProps {
  pokemonsInfo: PokemonInfo[];
  userPokemons: UserPokemons[];
  setPokemonStatus: (pokemonId: number, pokemonStatus: PokemonStatus) => void;
}

export interface IPokemonsState {
  pokemonsInfo: PokemonInfo[];
  userPokemons: UserPokemons[];
  selectedValue: string;
}

const defaultPokemonStatus = {
  trade: false,
  wished: false,
  favorite: false
};

export default class Pokemons extends PureComponent<
  IPokemonsProps,
  IPokemonsState
> {
  constructor(props: IPokemonsProps) {
    super(props);
    this.state = {
      pokemonsInfo: [],
      userPokemons: this.props.userPokemons,
      selectedValue: ""
    };
  }

  public componentDidMount() {
    this.setState({
      pokemonsInfo: sortPokemons(
        this.props.pokemonsInfo,
        this.state.selectedValue
      )
    });
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

  public handleMenuItemClick = (value: string) => {
    console.log(value);
    this.setState({
      selectedValue: value,
      pokemonsInfo: sortPokemons(this.props.pokemonsInfo, value)
    });
  };

  public render() {
    return (
      <div>
        <SortContainer
          selectedValue={this.state.selectedValue}
          handleMenuItemClick={this.handleMenuItemClick}
        />
        <div className="pokemons-container">
          {this.state.pokemonsInfo.map(item => (
            <PokemonCard
              key={item.id}
              data={item}
              onClick={this.onClick}
              pokemonStatus={this.getPokemonStatus(item.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}
