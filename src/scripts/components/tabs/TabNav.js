import React, { Component, PropTypes } from 'react';
import { offset } from 'libs/until';

export default class TabNav extends Component {

	static propTypes = {
		prefixCls: PropTypes.string,
		activeKey: PropTypes.string,
		panes: PropTypes.array,
		onChangeStart: PropTypes.func
	}

	componentDidMount() {
		this.initInkBarOffset();
	}

	componentDidUpdate(prevProps) {
		this.initInkBarOffset();
	}

	initInkBarOffset() {
		const { inkBar, activeNav } = this.refs;
		inkBar.style.width = activeNav.offsetWidth + 'px';
		inkBar.style.left = activeNav.offsetLeft + 'px';
	}

	render() {
		const { prefixCls, tabTitle, activeKey, clickHandle } = this.props;
		return (
			<div className={`${prefixCls}-navs`}>
				<ul>
					{this.props.panes.map((pane, index) => {
						let cls = pane.key === activeKey ? 'active': '';
						let ref = cls ? 'activeNav' : '';
						return (<li className={`${prefixCls}-nav ${cls}`}
									data-key={pane.key}
									key={index + 1}
									ref={ref}
									onClick={clickHandle}>
									{pane.props.tabTitle}
								</li>)
					})}
				</ul>
				<div className={`${prefixCls}-ink-bar`} ref={'inkBar'}></div>
			</div>
		)
	}
}

