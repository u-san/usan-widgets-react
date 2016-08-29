import React, { Component, PropTypes } from 'react';

export default class TabPane extends Component {
	constructor(props) {
		super(props);

	}
	static propTypes = {
		active: PropTypes.bool,
		children: PropTypes.any,
		prefixCls: PropTypes.string
	}

	componentDidUpdate(prevProps) {
		let prevActive = prevProps.active;
		let curItem = this.refs.conItem;

		if (prevActive) curItem.classList.add('prev-move'); 
	}

	render() {
		const { prefixCls, children, active, index, activeIndex } = this.props;

		let cls = active ? 'active' : index < activeIndex ? 'prev-item' : 'next-item';

		return (
			<div className={`${prefixCls}-con-item ${cls}`} ref="conItem">
				{ children }
			</div>
		)
	}
}
