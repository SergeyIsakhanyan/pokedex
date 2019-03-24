import React, { Component } from "react";
import "./App.css";
import { createHashHistory } from "history";
import { configureStore } from "./store/configureStore";
import { LayoutContainer } from "./containers/Layout";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";

const history = createHashHistory();
export const store = configureStore(history);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history} store={store}>
          <LayoutContainer />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
