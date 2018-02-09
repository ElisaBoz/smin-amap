// click pour voir tous les légumes
import React from 'react';
import AddVeggieForm from './AddVeggieForm'

class Inventor extends React.Component {
	render() {
		
		return (
			<div>
				<h1>Inventory</h1>
				<AddVeggieForm addVeggie={this.props.addVeggie}/>
				<button onClick={this.props.loadSamples}>Charger des légumes</button>
			</div>
			
			)

	}
}

export default Inventor;