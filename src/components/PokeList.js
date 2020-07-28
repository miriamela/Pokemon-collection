import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component{
    constructor(props){
        super(props)
        console.log(props);
    }

    render() {
        let paintPokemons=[]
        for (let i=0; i<this.props.pokemons.length; i++){
            paintPokemons.push((
                    <li key={this.props.pokemons[i].id} className="eachPoke">
                        <div className="imgPoke">
                            <img className="poke" alt= "poke" src={this.props.pokemons[i].url}/>
                        </div>
                        <h1 className="name">{this.props.pokemons[i].name}</h1>
                        <ul className="pokeType">
                            <Pokemon pokeType={this.props.pokemons[i].types}/>
                        </ul>
                    </li>
            ))
        }
        return(
            <ul className="pokeList">
                {paintPokemons}
                {/* {this.props.pokemons.map(pokemon => <li>
                    <Pokemon name={pokemon.name}></Pokemon>
                </li>
                )} */}
            </ul>
        )
    }
}

export default PokeList;