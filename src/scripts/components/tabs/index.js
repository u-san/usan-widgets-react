import React, { Component, PropTypes } from 'react';
import Tabs from './Tabs';
import TabPane from './TabPane';

export default class TabsExample extends Component {
	render() {
		return (
			<Tabs defaultActiveKey="1">
		    <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
		    <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
		    <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
		  </Tabs>
		)
	}
}
