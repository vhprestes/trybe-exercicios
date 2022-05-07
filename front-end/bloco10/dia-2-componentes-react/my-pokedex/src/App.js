import './App.css';
import React from 'react';
import pokemons from './data.jsx';
import Pokes from './components/pokes.jsx';

class App extends React.Component {
    render() {
        return (
            <main>
                <div>
                  <h1> POKEDEX </h1>
                    <section>
                      {
                        pokemons.map(item =>{
                          return <Pokes key={item.name} pokemons={item} />
                        })
                      }
                    </section>
                </div>
            </main>
        );
    }
  }

export default App;
