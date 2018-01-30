// le header
import React from 'react';

const Header = (props) => {
	return (
		<header className="top">
			<h1>The mask</h1>
			<h3> <span>{props.tagline}</span></h3>
		</header>
		)

}

export default Header;