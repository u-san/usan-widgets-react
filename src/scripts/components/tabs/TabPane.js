import React, { Component, PropTypes } from 'react';

export default class TabPane extends Component {
	static propTypes = {
		active: PropTypes.bool,
		children: PropTypes.any,
		prefixCls: PropTypes.string
	}

	render() {
		const { prefixCls, children, active } = this.props;
		return (
			<div className={`${prefixCls}-con-item ${active ? 'active' : ''}`}>
				{ children }
			</div>
		)
	}
}
