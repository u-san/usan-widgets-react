import React, { Component, PropTypes } from 'react';
import { transformName } from 'libs/until';

export default class TabPane extends Component {
	constructor(props) {
		super(props);

	}
	static propTypes = {
		active: PropTypes.bool,
		children: PropTypes.any,
		prefixCls: PropTypes.string
	}

	componentDidMount() {
		const { index, activeIndex, active } = this.props;
console.log(index, activeIndex)
		let curItem = this.refs.conItem;
		let t = curItem.offsetTop;

		if (active) {
			curItem.style[transformName] = `translate3d(0, ${-t}px, 0)`;

		} else {
			let x = index < activeIndex ? '-100%' : '100%';
			curItem.style[transformName] = `translate3d(${x}, ${-t}px, 0)`;
		}
	}

	render() {
		const { prefixCls, children, active } = this.props;
		return (
			<div className={`${prefixCls}-con-item ${active ? 'active' : ''}`} ref="conItem">
				{ children }
			</div>
		)
	}
}
