import React, { Component, PropTypes } from 'react';
import Tabs, { TabPane } from './Tabs';

export default class TabsExample extends Component {
	render() {
		return (
			<div style={{width: 300 + 'px'}}>
			<Tabs activeKey="1" onChangeStart={changeStart} onChangeEnd={changeEnd}>
			    <TabPane tabTitle="选项卡一" key="1">选项卡一内容</TabPane>
			    <TabPane tabTitle="选项卡二" key="2">选项卡二内容</TabPane>
			    <TabPane tabTitle="选项卡三" key="3">选项卡三内容</TabPane>
			</Tabs>
			</div>
		)
	}
}

function changeStart() {
	console.log('start')
	console.time('change')
}

function changeEnd() {
	console.timeEnd('change')
	console.log('end')
}
