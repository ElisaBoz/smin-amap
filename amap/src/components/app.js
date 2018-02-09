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
    this.ajout = this.ajout.bind(this)
    this.state = {
      veggies: {},
      order: {},
      orderVeggie: {}
      

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

  ajout(legume) {
    //console.log(legume)
    var nbVeggie = 0
    const orderVeggie = {...this.state.orderVeggie};

    Object
    .keys(orderVeggie)
    .map(function (key){
      if (orderVeggie[key].name == orderVeggie.name){
        orderVeggie[key].nbVeggie = orderVeggie.nbVeggie + 1
      }

    })

    orderVeggie[legume.nom] = legume;
    // mise à jour du state
    console.log(orderVeggie)
    this.setState({
      orderVeggie
    })
    // console.log(orderVeggie)

  }

  render() {
    var that = this;
    return (
      <div className="amap">
        <div className="menu">
          <Header tagline="Des bons legumes" />
          <ul className="list-of-veggies">
          {
            Object
              .keys(this.state.veggies)
              .map( key => <Veggie key = {key} details={this.state.veggies[key]} ajout={that.ajout}/> )
          }
          </ul>
          
        </div>
        <Order orderVeggie={this.state.orderVeggie}/>
        <Inventor addVeggie={this.addVeggie} loadSamples={this.loadSamples} />
      </div>
    )
  }
}

export default App;

