// c'est parti !

import React from 'react';

import Order from './Order';

import Header from './Header';

import Inventor from './Inventor';

import StorePicker from './StorePicker';

import { BrowserRouter, Route, Link as Router } from 'react-router-dom'

class App extends React.Component {
	render() {
		
		{/*mon commentaire*/}
		return (

				
				<div className="amap">
					<div className="menu">
						<Header/>
					</div>
						<Order/>
						<Inventor/>
				</div>
			

			)

	}
}


const homepage = () => {
	<p>LAlalalallalal amdoula</p>

}
export default App;