import React, { Component, PropTypes } from 'react';
import Tabs, { TabPane } from '../components/tabs';

export default class TabsExample extends Component {
	render() {
		return (
			<Tabs activeKey="1" onChangeStart={changeStart} onChangeEnd={changeEnd}>
			    <TabPane tabTitle="选项卡一" key="1">选项卡一内容</TabPane>
			    <TabPane tabTitle="选项卡二" key="2">选项卡二内容</TabPane>
			    <TabPane tabTitle="选项卡三" key="3">选项卡三内容</TabPane>
			</Tabs>
		)
	}
}

function changeStart(curKey, nextKey) {
	console.log('start:  curKey' + curKey + ', nextKey' + nextKey)
}

function changeEnd(curKey, prevKey) {
	console.log('end: curKey' + curKey + ', prevKey' + prevKey)
}
