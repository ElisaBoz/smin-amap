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
    this.ajouter = this.ajouter.bind(this);

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


  ajouter(veggie) {
    const order = {...this.state.order}
    var that = this

    Object
      .keys(this.state.order)
      .map(function (key){
        // pour le calucule du prix
        console.log(order[key].nom)
        console.log(veggie.nom)
        if (order[key].nom === veggie.nom) {
          veggie.nbProd = order[key].nbProd + 1
          veggie.prix = (parseInt(order[key].nbProd) + 1) * parseInt(veggie.prix)
        }
      })
    order[veggie.nom] = veggie;
    this.setState({order});
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
              .map( key => <Veggie ajouter={this.ajouter} key={key} details={this.state.veggies[key]}/>)
          }
          </ul>
          
        </div>
        <Order chat={this.state.order}/>
        <Inventor addVeggie={this.addVeggie} loadSamples={this.loadSamples} />

      </div>
    )
  }
}

export default App;

