// c'est parti !

import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
class StorePicker extends React.Component {
	render() {
		
		{/*mon commentaire*/}
		return (


				<form class="store-selector">
					<h2>Nom de magasin</h2>
					<input type="text" required placeholder="nom du magasin"/>
					<button type="submit"> </button>
				</form>


			)

	}
}

export default StorePicker;