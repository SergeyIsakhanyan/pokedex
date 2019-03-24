import React, { PureComponent } from "react";
import { Route } from "react-router";
import { Switch } from "react-router-dom";
import { PokemonsContainer } from "../../containers/Pokemons";
import { ROUTES } from "../../routes";
import Header from "../Header";

export default class AppContent extends PureComponent {
  public render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact={true}
            path={ROUTES.Home}
            component={PokemonsContainer}
          />
        </Switch>
      </div>
    );
  }
}
