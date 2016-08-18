import React, { Component, PropTypes } from 'react';

export default class TabPane extends Component {
	static propTypes = {
		active: PropTypes.bool,
		tabTitle: PropTypes.string,
		children: PropTypes.any,
		prefixCls: PropTypes.string
	}

	render() {
		console.log(this.props)
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}
