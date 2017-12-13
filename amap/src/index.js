// c'est parti !

import React from 'react';

import {render} from 'react-dom';

import StorePicker from './components/StorePicker';

import NotFound from './components/NotFound';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'



import App from './components/app';

import './css/style.css'


const Root = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={StorePicker}/>
				<Route path="/store/:storId" component={App}/>
				<Route component={NotFound}/>
			</Switch>
		</Router>

	)
}







render(<Root/>, document.querySelector('#main'));
//render(<StorePicker/>, document.querySelector('#main'));