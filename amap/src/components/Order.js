import React from 'react';


class Order extends React.Component {
	render() {
		//console.log(this.props.orderVeggie)
		var that = this

		return (
			
			<div className="order-wrap">
			<h2>Votre commande</h2>
				


				<ul className="order">
					
						{
							Object
							.keys(this.props.orderVeggie)
							.map(function(key){
								return(
								<li>
									<p>{that.props.orderVeggie[key].nom}</p>

									{that.props.orderVeggie[key].prix}
								</li>
								)
							})
						}
						
					
					<li className="total">
						<strong>Total:</strong>
						
					</li>
				</ul>
			</div>

			)

	}
}

export default Order;