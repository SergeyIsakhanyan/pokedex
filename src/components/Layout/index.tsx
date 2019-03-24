import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import CssBaseline from "@material-ui/core/CssBaseline";
import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import { Strings } from "../../localization";
import AppContent from "../AppContent";

export interface ILayoutProps extends RouteComponentProps<{}> {
  isBootstrapping: boolean;
  isBootstrapSuccess: boolean;
  startBootstrap: () => void;
  getPokemonsInfo: () => void;
}

export default class Layout extends Component<ILayoutProps, {}> {
  public componentDidMount() {
    !this.props.isBootstrapSuccess && this.props.startBootstrap();
  }

  public render() {
    if (this.props.isBootstrapping) {
      return (
        <div className="common-spinner">
          <CircularProgress color="inherit" size={50} />
        </div>
      );
    } else if (this.props.isBootstrapSuccess) {
      return (
        <>
          <CssBaseline />
          <AppContent />
        </>
      );
    } else {
      return (
        <div className="bootstrap-failed">
          {`Strings.Layout.Bootstrap.onFail`}
        </div>
      );
    }
  }
}
