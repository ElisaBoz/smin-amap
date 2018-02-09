import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {

	
	render() {
	

		var that = this
		var totalPrix = 0

		return (
			<div className="order-wrap">
				<h2>Votre commande</h2>
				<ul className="order">
					{
						Object
							.keys(this.props.chat)
							.map(function (key) {
								console.log(that.props.chat[key].prix)
								return (
									<li>
										<p>{that.props.chat[key].nbProd} kg {that.props.chat[key].nom}</p>
										{formatPrice(parseInt(that.props.chat[key].prix))}
									</li>)
							})
					}
					<li className="total">
						<strong>Total:</strong>
						{
							Object
								.keys(this.props.chat)
								.map(function (key) {
									totalPrix = totalPrix + that.props.chat[key].prix
								})
						}
						{formatPrice(totalPrix)}
						
					</li>
				</ul>
			</div>
			)

	}
}

export default Order;