import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
	render() {
		return (
			<ul>
				<li><Link to={`/tabs`}>Tabs</Link></li>
				<li><Link to={`/tree`}>Tree</Link></li>
			</ul>
		)
	}
}