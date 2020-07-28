import React from 'react';
import '../App.css';
import pokeList from '../data/pokemons.json';
import Pokelist from './PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: pokeList
    }
  }

  render() {
    return (
      <div className="App">
        <Pokelist pokemons={this.state.pokemons}/>
      </div>
    );
  }
}

export default App;
