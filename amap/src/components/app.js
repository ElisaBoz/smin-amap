// c'est parti !

import React from 'react';

import Order from './Order';

import Header from './Header';

import Inventor from './Inventor';


class App extends React.Component {
	render() {
		return (
				<div className="amap">
					<div className="menu">
						<Header tagline="ca gaz les loulou"/>
					</div>
						<Order/>
						<Inventor/>
				</div>
			)

	}
}



export default App;