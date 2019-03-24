import React, { PureComponent } from "react";
import { PokemonDto, PokemonInfo } from "../../types/pokemonType";
import PokemonCard from "../../components/Pokemon";
import "../../styles/Pokemons.scss";

export interface IPokemonsProps {
  pokemonsInfo: PokemonInfo[];
}

export default class Pokemons extends PureComponent<IPokemonsProps> {
  public componentDidMount() {}

  public render() {
    return (
      <div className="pokemons-container">
        {this.props.pokemonsInfo.map(item => (
          <PokemonCard key={item.id} data={item} />
        ))}
      </div>
    );
  }
}
