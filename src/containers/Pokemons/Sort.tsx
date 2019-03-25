import React, { PureComponent } from "react";
import { MenuItem, TextField } from "@material-ui/core";
import "../../styles/Sort.scss";

export const options = [
  { value: "Sort results by...", name: "Sort results by..." },
  { value: "Lowest number (First)", name: "Lowest number (First)" },
  { value: "Highest number (First)", name: "Highest number (First)" },
  { value: "A-Z", name: "A-Z" },
  { value: "Z-A", name: "Z-A" }
];

interface IPokemonCardProps {
  selectedValue: string;
  handleMenuItemClick: (value: string) => void;
}

export default class SortContainer extends PureComponent<IPokemonCardProps> {
  public handleMenuItemClick = (event: any) => {
    let value = event.currentTarget.dataset.value;
    this.props.handleMenuItemClick(value);
  };

  public render() {
    return (
      <div className="sort-container">
        <TextField
          id="lock-menu"
          className="drop-down"
          select={true}
          value={this.props.selectedValue || options[0].value}
          SelectProps={{
            MenuProps: {
              classes: {
                paper: "modal-menu-paper"
              },
              getContentAnchorEl: null,
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left"
              }
            },
            classes: { root: "select" }
          }}
          onChange={this.handleMenuItemClick}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option.value}
              disabled={index === 0}
              selected={option.value === this.props.selectedValue}
              value={option.value}
            >
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
    );
  }
}
