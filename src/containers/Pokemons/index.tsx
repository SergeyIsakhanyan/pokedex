import { connect } from "react-redux";
import { Dispatch } from "redux";
import { StoreState } from "../../store/configureStore";
import Pokemons from "./Pokemons";
import { UserDataActions } from "../UserData/actions";
import { PokemonStatus } from "../../types/pokemonType";

const mapStateToProps = (state: StoreState) => {
  return {
    pokemonsInfo: state.userData.pokemonsInfo,
    userPokemons: state.userData.userPokemons
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setPokemonStatus: (pokemonId: number, pokemonStatus: PokemonStatus) =>
      dispatch(UserDataActions.setPokemonStatus(pokemonId, pokemonStatus))
  } as Partial<{}>;
};

export const PokemonsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pokemons);
