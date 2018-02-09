
import React from 'react';


class Veggie extends React.Component {


	ajout() {
	        const veggie = {
	            nom: this.props.details.name,
	            prix: this.props.details.price,
	            status: this.props.details.status,
	            nbProd: 1
	        }
	        this.props.ajouter(veggie)
	    }


	render() {

		

		const { details } = this.props

        var ajoutPanier = []
        if (details.status === "available"){
            ajoutPanier.push(<button onClick={() => this.ajout()}>Ajouter au panier</button>)
        } else {
            ajoutPanier.push(<button disabled>Plus de stock !</button>)
        }
		
		
		return (
			
			<li className="menu-veggie">
				<img src={details.image} />
				<h3 className="veggie-name">
					{details.name}
					<span className="price">{details.price}</span>
				</h3>
				<p>{details.desc}</p>
				{ajoutPanier}
			</li>


			)

	}
}

export default Veggie;