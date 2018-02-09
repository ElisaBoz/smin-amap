
import React from 'react';

import PropTypes from 'prop-types'

import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	constructor() {
		super();
		this.goToStore = this.goToStore.bind(this);
	}

	goToStore(event) {
		event.preventDefault();
		const storeId = this.storeInput.value;
		this.props.history.push(`store/${storeId}`);
		//console.log(${storeId});

	}

	render() {
		return (
			<form class="store-selector" onSubmit={(e) => this.goToStore(e)}>
				<h2>Nom de magasin</h2>
				<input ref={(input) => {this.storeInput = input}} type="text" required placeholder="nom du magasin" defaultValue={getFunName()}/>
				<button type="submit"> Voir le magasin -></button>
			</form>

			)

	}
}
StorePicker.contexTypes = {
	router: PropTypes.object	
}
export default StorePicker;