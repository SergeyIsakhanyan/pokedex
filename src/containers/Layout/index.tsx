import { connect } from "react-redux";
import { withRouter } from "react-router";
import { routerActions } from "react-router-redux";
import { Dispatch } from "redux";
import Layout, { ILayoutProps } from "../../components/Layout";
import { StoreState } from "../../store/configureStore";
import { LayoutActions } from "./actions";
import { UserDataActions } from "../UserData/actions";

const mapStateToProps = (state: StoreState) => {
  return {
    isBootstrapping: state.layout.isBootstrapInProgress,
    isBootstrapSuccess: state.layout.isBootstrapSuccessful
  } as ILayoutProps;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    startBootstrap: () => dispatch(LayoutActions.bootstrapUserData()),
    getPokemonsInfo: () => dispatch(UserDataActions.getPokemonsInfo()),
    routePush: (location: string) => dispatch(routerActions.push(location))
  } as Partial<ILayoutProps>;
};

export const LayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Layout));
