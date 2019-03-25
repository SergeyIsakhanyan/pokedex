import { takeLatest, all, call, put, select } from "redux-saga/effects";
import { GET_POKEMONS_INFO } from "./constants";
import { UserDataAction, UserDataActions } from "./actions";
import { Api } from "../../services/api/api";
import { StoreState } from "../../store/configureStore";
import { PokemonDto, PokemonInfo } from "../../types/pokemonType";

function* getPokemonsInfo(action: UserDataAction) {
  let pokemons = yield select(
    (state: StoreState) => state.userData.pokemons.results
  );
  // let pokemonsInfoArray: PokemonInfo[] = [];
  // for (const pokemon of pokemons) {
  //   try {
  //     const pokemonInfo = yield call(Api.getPokemonInfo, pokemon.name);
  //     const extraInfo = yield call(Api.getPokemonSpeciesInfo, pokemon.name);
  //     const allInfo = Object.assign({}, pokemonInfo, extraInfo);
  //     pokemonsInfoArray.push(allInfo);
  //     console.log("pokemonInfo", allInfo);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }
  // yield put(UserDataActions.savePokemonsInfo(pokemonsInfoArray));
}

function* userDataWatcher() {
  yield all([takeLatest(GET_POKEMONS_INFO, getPokemonsInfo)]);
}

export default userDataWatcher;
