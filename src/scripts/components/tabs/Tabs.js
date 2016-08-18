import React, { Component, PropTypes } from 'react';
import TabNav from './TabNav';
import TabPane from './TabPane';

class Tabs extends Component {
	constructor(props) {
		super(props);
		console.log(this)
		this.state = {activeKey: this.props.activeKey};
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

	render() {
		const { activeKey } = this.state;
		const { prefixCls, children, onChangeStart, onChangeEnd } = this.props;

		let tabPanes = children.map((pane) => {
			let active = pane.key === activeKey;
 			return React.cloneElement(pane, { active: active,
 																			  prefixCls: prefixCls });
		});


		return (
			<div className={`${prefixCls}-wrap`}>
				<TabNav activeKey={activeKey}
								panes={children}
								prefixCls={prefixCls}
								onChangeStart={onChangeStart} />
				<div className={`${prefixCls}-content`}>
					{tabPanes}
				</div>
			</div>
		)
	}
}


export default Tabs;
export { TabPane };