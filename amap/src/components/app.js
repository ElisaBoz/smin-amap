// c'est parti !

import React from 'react';

import Order from './Order';

import Header from './Header';

import Inventor from './Inventor';

import Veggie from './Veggie';

import sampleVeggies from '../sample-veggies';



class App extends React.Component {
  constructor() {
    super();

    this.addVeggie = this.addVeggie.bind(this);
    this.loadSamples = this.loadSamples.bind(this);

    this.state = {
      veggies: {},
      order: {}
    };
  }

  addVeggie(veggie) {
    // mise à jour du state
    // on fait une copie de notre state
    const veggies = {...this.state.veggies};
    // ajout de notre nouveau veggie
    const timestamp = Date.now();
    veggies[`veggie-${timestamp}`] = veggie;
    // mise à jour du state
    this.setState({ veggies });
  }

  loadSamples() {
    this.setState({
      veggies: sampleVeggies
    });
  }

  render() {
    return (
      <div className="amap">
        <div className="menu">
          <Header tagline="Des bons legumes" />
          <ul className="list-of-veggies">
          {
            Object
              .keys(this.state.veggies)
              .map( key => <Veggie key = {key} details={this.state.veggies[key]}/>)
          }
          </ul>
          
        </div>
        <Order />
        <Inventor addVeggie={this.addVeggie} loadSamples={this.loadSamples} />
      </div>
    )
  }
}

export default App;

