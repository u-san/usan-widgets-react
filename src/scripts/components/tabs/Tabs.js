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

 	getTabPanes = () => {

 		let activeKey = this.state.activeKey;

 		return this.props.children.map((pane) => {
 			let active = pane.key === activeKey;
 			return React.cloneElement(pane, {active: active});
 		});
 	}

	render() {
		let tabPanes = this.getTabPanes();

		return (
			<div>
				<TabNav activeKey={this.state.activeKey} panes={this.props.children} />
				{tabPanes}
			</div>
		)
	}
}


export default Tabs;
export { TabPane };