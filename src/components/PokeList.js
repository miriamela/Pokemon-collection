import React from "react";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types";

class PokeList extends React.Component {
  render() {
    let paintPokemons = [];
    for (let i = 0; i < this.props.pokemons.length; i++) {
      paintPokemons.push(
        <li key={this.props.pokemons[i].id} className="eachPoke">
          <div className="imgPoke">
            <img
              className="poke"
              alt={this.props.pokemons[i].name}
              src={this.props.pokemons[i].url}
            />
          </div>
          <h2 className="name">{this.props.pokemons[i].name}</h2>
          <ul className="pokeType">
            <Pokemon pokeType={this.props.pokemons[i].types} />
          </ul>
        </li>
      );
    }
    return <ul className="pokeList">{paintPokemons}</ul>;
  }
}

PokeList.propTypes = { pokemons: PropTypes.array.isRequired };
export default PokeList;
