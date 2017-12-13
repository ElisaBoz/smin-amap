// c'est parti !

import React from 'react';

import {render} from 'react-dom';

import StorePicker from './components/StorePicker';

import { BrowserRouter as Router, Route} from 'react-router-dom'



import App from './components/app';

import './css/style.css'


const Root = () => {
	return (
		<Router>
			<div>
				<Route exact path="/" component={StorePicker}/>
				<Route path="/store" component={App}/>
			</div>
		</Router>

	)
}







render(<Root/>, document.querySelector('#main'));
//render(<StorePicker/>, document.querySelector('#main'));