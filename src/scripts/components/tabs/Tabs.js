import React, { Component, PropTypes } from 'react';
import TabNav from './TabNav';
import TabPane from './TabPane';

class Tabs extends Component {
	constructor(props) {
		super(props);
	console.log(this)
		this.state = {activeKey: this.props.activeKey};
		this.clickHandle = this.clickHandle.bind(this);
		this.getActiveIndex = this.getActiveIndex.bind(this);
	}

	static defaultProps = {
		prefixCls: 'usan-tabs',
		onChangeStart() {},
		onChangeEnd() {}
	};

	static propTypes = {
		activeKey: PropTypes.string,
		children: PropTypes.any,
		onChangeStart: PropTypes.func,
		onChangeEnd: PropTypes.func
	};

	getActiveIndex() {
		const { activeKey } = this.state;
		let activeIndex;
		React.Children.forEach(this.props.children, (pane, index) => {
			if (pane.key === activeKey) {
				activeIndex = index;
				return;
			}
		});

		return activeIndex;
	}

	clickHandle(e) {
		let curKey = e.target.getAttribute('data-key');

		if (curKey === this.state.activeKey) return;

		this.props.onChangeStart();
		this.setState({activeKey: curKey});
		this.props.onChangeEnd();
	}

	render() {
		const { activeKey } = this.state;
		const { prefixCls, children, onChangeStart, onChangeEnd } = this.props;

		let activeIndex = this.getActiveIndex();
		let tabPanes = children.map((pane, index) => {
			let active = pane.key === activeKey;
 			return React.cloneElement(pane, { active: active,
 											  index: index,
 											  activeIndex: activeIndex,
 											  prefixCls: prefixCls });
		});

		return (
			<div className={`${prefixCls}-wrap`}>
				<TabNav activeKey={activeKey}
						panes={children}
						prefixCls={prefixCls}
						clickHandle={this.clickHandle} />
				<div className={`${prefixCls}-content`}>
					{tabPanes}
				</div>
			</div>
		)
	}
}


export default Tabs;
export { TabPane };