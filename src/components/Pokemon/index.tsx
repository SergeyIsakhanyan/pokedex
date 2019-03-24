import React, { PureComponent } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { PokemonInfo } from "../../types/pokemonType";
import AddIcon from "@material-ui/icons/Add";
import FavIcon from "@material-ui/icons/Favorite";
import TradeIcon from "@material-ui/icons/CompareArrows";
import { IconButton, Fab, Chip } from "@material-ui/core";
import {
  getEnglishText,
  upperFirstLetter,
  getChipColor
} from "../../utils/pokemonInfoUtils";

interface IPokemonCardProps {
  data: PokemonInfo;
}

interface IPokemonCardState {
  elevation: number;
}

export default class PokemonCard extends PureComponent<
  IPokemonCardProps,
  IPokemonCardState
> {
  constructor(props: IPokemonCardProps) {
    super(props);
    this.state = {
      elevation: 1
    };
  }
  componentDidMount() {
    this.props.data.id === 1 && console.log(this.props.data);
  }

  public onHover = () => {
    console.log("hover");
    this.setState({
      elevation: 6
    });
  };

  public onMouseLeave = () => {
    this.setState({
      elevation: 1
    });
  };

  public render() {
    const pokemon = this.props.data;
    return (
      <Card
        className={`pokemon-card`}
        onMouseEnter={this.onHover}
        onMouseLeave={this.onMouseLeave}
        elevation={this.state.elevation}
      >
        <CardMedia
          style={{
            minHeight: 150,
            backgroundSize: "contain"
          }}
          image={pokemon.sprites.front_default}
          title="Contemplative Reptile"
        />
        <CardActions style={{ display: "inline-flex" }}>
          <IconButton color="primary">
            <AddIcon />
          </IconButton>
          <IconButton color="primary">
            <FavIcon />
          </IconButton>
          <IconButton color="primary">
            <TradeIcon />
          </IconButton>
        </CardActions>
        <CardContent style={{ marginBottom: 48 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {upperFirstLetter(pokemon.name)}
          </Typography>
          <Typography component="p">
            {getEnglishText(pokemon.flavor_text_entries)}
          </Typography>
        </CardContent>
        <CardActions className="chips">
          {pokemon.types.map((item: any) => (
            <Chip
              key={item.type.name}
              label={item.type.name}
              style={{
                backgroundColor: getChipColor(item.type.name),
                color: "white"
              }}
            />
          ))}
        </CardActions>
      </Card>
    );
  }
}
