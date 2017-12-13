// c'est parti !

import React from 'react';


class StorePicker extends React.Component {
	render() {
		return (
			<form class="store-selector">
				<h2>Nom de magasin</h2>
				<input type="text" required placeholder="nom du magasin"/>
				<button type="submit"> Voir le magasin -></button>
			</form>

			)

	}
}

export default StorePicker;