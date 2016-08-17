import React, { Component, PropTypes } from 'react';

export default class TabPane extends Component {
	render() {
		console.log(this.props)
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}

TabPane.propTypes = {
	active: PropTypes.bool,
	tabTitle: PropTypes.string,
	children: PropTypes.any,
}