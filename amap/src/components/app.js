// c'est parti !

import React from 'react';

import Order from './Order';

import Header from './Header';

import Inventor from './Inventor';

	



class App extends React.Component {
	constructor() {
		super();
		this.state = {
			veggies: {}
		}
		this.addVeggie = this.addVeggie.bind(this);

	}


	addVeggie(veggie) {
		const veggies = {...this.state.veggies};

		const timestamp = Date.now();

		veggies[`veggie-${timestamp}`] = veggie;

		this.setState({veggies});
	}

	render() {
		return (
				<div className="amap">
					<div className="menu">
						<Header tagline="ca gaz les loulou"/>
					</div>
						<Order/>
						<Inventor addVeggie={this.addVeggie}/>
				</div>
			)

	}
}



export default App;