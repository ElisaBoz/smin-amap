<<<<<<< HEAD

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
=======
import React from 'react';
import PropTypes from "prop-types";
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // Autre méthode pour rendre StorePicker accessible
  // à goToStore en appellant "this":
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  goToStore(event) {
    event.preventDefault();
    console.log("Tu as changé l'URL");
    // On récupère le texte entré dans le formulaire
    const storeId = this.storeInput.value;
    console.log(`On va vers ${storeId}`);
    // Ensuite on va se déplacer de / vers /store/:storeId
    console.log(this);
    this.props.history.push(`store/${storeId}`);
  }

  render() {
    // Dans tout les cas, afficher
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Entrez un nom de magasin</h2>
        <input type="text" required placeholder="Nom du magasin" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}}/>
        <button type="submit">Visiter le magasin →</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: PropTypes.object
}

export default StorePicker;
>>>>>>> d5301965adb10dc9e234f348af9dbde3395ddbfa
