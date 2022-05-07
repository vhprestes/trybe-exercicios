import React from 'react';

class Pokes extends React.Component {
    render() {
        const {pokemons} = this.props
        const {name, type, image, averageWeight} = pokemons
        return(
        <article>
            <p>{name}</p>
            <p>{type}</p>
            <p>{averageWeight.value}kg</p>
            <img src={image} alt="pokemons" />
            </article>)
    }
    
}
export default Pokes