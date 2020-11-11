import React from "react";
import "../App.scss";
import pokeList from "../data/pokemons.json";
import Pokelist from "./PokeList";
import title from "../imgs/title.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: pokeList,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="head">
          <div className="containerImg">
            <img className="title" alt="title" src={title}></img>
          </div>
          {/* <div className="title2">
            <p>...my collection</p>
          </div> */}
        </header>
        <main className="main">
          <Pokelist pokemons={this.state.pokemons} />
        </main>
      </div>
    );
  }
}

export default App;
