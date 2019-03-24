import { History } from "history";
import throttle from "lodash/throttle";
import { routerMiddleware } from "react-router-redux";
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store
} from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import * as localStore from "./localStore";
import { ILayoutState, layoutReducer } from "../containers/Layout/reducers";
import { layoutWatcher } from "../containers/Layout/sagas";
import {
  IUserDataState,
  userDataReducer
} from "../containers/UserData/reducers";
import userDataWatcher from "../containers/UserData/sagas";

const STATE_KEY = "@pdx/pdx-web-app/v-1";
const STATE_REFRESH = 1000;

export interface StoreState {
  layout: ILayoutState;
  userData: IUserDataState;
}

const reducers = combineReducers<StoreState>({
  layout: layoutReducer,
  userData: userDataReducer
});

function* sagas() {
  yield all([layoutWatcher(), userDataWatcher()]);
}

export function configureStore(history: History): Store<StoreState> {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = getCompose();
  const persistedState = localStore.loadState<StoreState>(STATE_KEY);
  // @ts-ignore
  const store = createStore<StoreState>(
    reducers,
    persistedState,
    composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
  );
  store.subscribe(
    throttle(() => {
      localStore.saveState(STATE_KEY, store.getState());
    }, STATE_REFRESH)
  );
  sagaMiddleware.run(sagas);
  return store;
}

function getCompose() {
  let result = compose;
  if (process.env.NODE_ENV === "development") {
    // @ts-ignore
    const { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: devToolsCompose } = window;
    result = devToolsCompose || result;
  }
  return result;
}
