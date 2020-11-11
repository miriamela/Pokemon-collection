import React from "react";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    let eachPokeType = [];
    for (let i = 0; i < this.props.pokeType.length; i++) {
      eachPokeType.push(<li key={i}> {this.props.pokeType[i]} </li>);
    }

    return <>{eachPokeType}</>;
  }
}
Pokemon.propTypes = { pokeType: PropTypes.array.isRequired };
export default Pokemon;
