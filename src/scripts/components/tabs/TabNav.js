import React, { Component, PropTypes } from 'react';
import { offset } from '../../libs/until';

export default class TabNav extends Component {
	componentDidMount() {
		const { inkBar, activeNav } = this.refs;
		inkBar.style.width = activeNav.offsetWidth + 'px';
	}

	render() {
console.log(this.props)
		const { prefixCls, tabTitle, activeKey} = this.props;
		return (
			<div className={`${prefixCls}-navs`}>
				<ul>
					{this.props.panes.map((pane, index) => {
						let ref = pane.key === activeKey ? 'activeNav' : '';
						return <li className={`${prefixCls}-nav`} key={index + 1} ref={ref}>{pane.props.tabTitle}</li>
					})}
				</ul>
				<div className={`${prefixCls}-ink-bar`} ref={'inkBar'}></div>
			</div>
		)
	}
}

TabNav.propTypes = {
	activeKey: PropTypes.string,
	panes: PropTypes.any,
};