import { all, call, put, takeLatest } from "redux-saga/effects";
import { Api } from "../../services/api/api";
import { LayoutActions } from "./actions";
import { LAYOUT_BOOTSTRAP_USER_DATA } from "./constants";
import { PokemonDto, Pokemons, PokemonInfo } from "../../types/pokemonType";
import { UserDataActions } from "../UserData/actions";

function* bootstrapUserData() {
  let pokemonsInfoArray: PokemonInfo[] = [];
  try {
    const pokemons = yield call(Api.getPokemons);
    console.log(pokemons);
    yield put(UserDataActions.savePokemons(pokemons.data));
    for (const pokemon of pokemons.data.results) {
      try {
        const pokemonInfo = yield call(Api.getPokemonInfo, pokemon.name);
        const extraInfo = yield call(Api.getPokemonSpeciesInfo, pokemon.name);
        const allInfo = Object.assign({}, pokemonInfo, extraInfo);
        pokemonsInfoArray.push(allInfo);
        console.log("pokemonInfo", pokemonInfo.id);
      } catch (e) {
        console.error(e);
      }
    }
    yield put(UserDataActions.savePokemonsInfo(pokemonsInfoArray));
    const pokemonTypes = yield call(Api.getPokemonTypes);
    yield put(UserDataActions.savePokemonTypes(pokemonTypes));
    yield put(LayoutActions.bootstrapFinished(true));
  } catch (e) {
    console.error("Request error", e);
    yield put(LayoutActions.bootstrapFinished(false));
  }
}

export function* layoutWatcher() {
  yield all([takeLatest(LAYOUT_BOOTSTRAP_USER_DATA, bootstrapUserData)]);
}
