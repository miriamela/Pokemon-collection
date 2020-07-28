import React from 'react';

class Pokemon extends React.Component{
    constructor(props){
        super (props)
        console.log(props);
    }
    render(){

        let eachPokeType=[]
        for (let i=0; i<this.props.pokeType.length; i++){
            eachPokeType.push((
               
                <span key={i}> {this.props.pokeType[i]} </span>
            
            ))
        }

        return(
            <li>
               {eachPokeType} 
            </li>
        )
    }
}
export default Pokemon;