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
		// const { index, activeIndex, active } = this.props;
		// let curItem = this.refs.conItem;
		// let t = curItem.offsetTop;

		// if (active) {
		// 	curItem.style[transformName] = `translate3d(0, ${-t}px, 0)`;

		// } else {
		// 	let x = index < activeIndex ? '-100%' : '100%';
		// 	curItem.style[transformName] = `translate3d(${x}, ${-t}px, 0)`;
		// }
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
