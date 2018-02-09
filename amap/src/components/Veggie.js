
import React from 'react';



//props element envoyé
//state dans la page
class Veggie extends React.Component {

	ajouter() {
		const legume =  {
			nom: this.props.details.name,
			prix: this.props.details.price,
			nbVeggie: 1
		}
			
		this.props.ajout(legume)
	}

	render() {

		const { details } = this.props

		var etat = []

		if (details.status == "available"){
			etat.push(<button onClick={() => this.ajouter()}>Ajouter au panier</button>) //onClick={this.props.ajout}
		} else { 
			etat.push(<button disabled>Plus en stock</button>)
		}
		
		
		return (
			
			<li className="menu-veggie">
				<img src={details.image} />
				<h3 className="veggie-name">
					{details.name}
					<span className="price">{details.price}</span>
				</h3>
				<p>{details.desc}</p>
				{etat}
			</li>


			)

	}
}

export default Veggie;