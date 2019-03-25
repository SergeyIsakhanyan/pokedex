import React, { PureComponent } from "react";
import {
  PokemonInfo,
  UserPokemons,
  PokemonStatus,
  PokemonType
} from "../../types/pokemonType";
import PokemonCard from "../../components/Pokemon";
import "../../styles/Pokemons.scss";
import SortContainer from "./Sort";
import {
  sortPokemons,
  getChipColor,
  sortPokemonsByType
} from "../../utils/pokemonInfoUtils";
import { Chip } from "@material-ui/core";

export interface IPokemonsProps {
  pokemonsInfo: PokemonInfo[];
  userPokemons: UserPokemons[];
  pokemonTypes: PokemonType[];
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
    this.setState({
      selectedValue: value,
      pokemonsInfo: sortPokemons(this.props.pokemonsInfo, value)
    });
  };

  public onChipClick = (e: any) => {
    let type = e.currentTarget.id;
    this.setState({
      pokemonsInfo: sortPokemonsByType(this.props.pokemonsInfo, type)
    });
  };

  public render() {
    return (
      <div>
        <SortContainer
          selectedValue={this.state.selectedValue}
          handleMenuItemClick={this.handleMenuItemClick}
        />
        <div className="types-container">
          {this.props.pokemonTypes.map(item => (
            <Chip
              key={item.name}
              id={item.name}
              label={item.name}
              defaultValue={item.name}
              style={{
                backgroundColor: getChipColor(item.name),
                color: "white",
                margin: 5,
                minWidth: 75
              }}
              onClick={this.onChipClick}
            />
          ))}
        </div>
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
