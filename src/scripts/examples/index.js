import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
	render() {
		return (
			<ul>
				<li><Link to={`/tabs`}>tabs</Link></li>
			</ul>
		)
	}
}