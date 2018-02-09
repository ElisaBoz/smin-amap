<<<<<<< HEAD
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
=======
import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import './css/style.css';
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StorePicker} />
        <Route path="/store/:storeId" component={App} />

         {/* La <Route> qui suit n'a pas de "path", donc elle va
         toujours matcher. Cela veut dire que NotFound va
         s'afficher quand aucun des autre <Route>s ne match l'url actuelle. */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

render(<Root/>, document.querySelector('#main'));
>>>>>>> d5301965adb10dc9e234f348af9dbde3395ddbfa
