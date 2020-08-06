import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    let eachPokeType = [];
    for (let i = 0; i < this.props.pokeType.length; i++) {
      eachPokeType.push(<span key={i}> {this.props.pokeType[i]} </span>);
    }

    return <li>{eachPokeType}</li>;
  }
}
Pokemon.propTypes={pokeType:PropTypes.array.isRequired};
export default Pokemon;
