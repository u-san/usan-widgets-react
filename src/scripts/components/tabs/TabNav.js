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
		const { inkBar, activeNav } = this.refs;
		inkBar.style.width = activeNav.offsetWidth + 'px';
		
	}

	componentWillReceiveProps(nextProps) {
		
	}

	componentDidUpdate(nextProps) {
		console.log(nextProps)
		const { inkBar, activeNav } = this.refs;
		inkBar.style.left = activeNav.offsetLeft + 'px';
		console.log(activeNav.offsetLeft)	
	}

	render() {
// console.log(this.props)
		const { prefixCls, tabTitle, activeKey, clickHandle} = this.props;
		return (
			<div className={`${prefixCls}-navs`}>
				<ul>
					{this.props.panes.map((pane, index) => {
						let ref = pane.key === activeKey ? 'activeNav' : '';
						return (<li className={`${prefixCls}-nav`}
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

