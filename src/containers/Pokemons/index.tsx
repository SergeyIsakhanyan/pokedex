import { connect } from "react-redux";
import { Dispatch } from "redux";
import { StoreState } from "../../store/configureStore";
import Pokemons from "./Pokemons";

const mapStateToProps = (state: StoreState) => {
  return {
    pokemonsInfo: state.userData.pokemonsInfo
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {} as Partial<{}>;
};

export const PokemonsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pokemons);
