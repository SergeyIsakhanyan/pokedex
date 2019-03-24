import React, { PureComponent } from "react";
import "../../styles/Header.scss";

interface HProps {
  getPokemonsInfo?: () => void;
}

export default class Header extends React.Component<HProps, {}> {
  componentDidMount() {
    // this.props.getPokemonsInfo();
  }
  public render() {
    return (
      <div className="wrapper">
        <div className="sliding-background" />
      </div>
    );
  }
}
