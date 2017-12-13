// c'est parti !

import React from 'react';
import AddVeggieForm from './AddVeggieForm'

class Inventor extends React.Component {
	render() {
		
		return (
			<div>
				<h1>Inventory</h1>
				<AddVeggieForm addVeggie={this.props.addVeggie}/>
			</div>
			
			)

	}
}

export default Inventor;