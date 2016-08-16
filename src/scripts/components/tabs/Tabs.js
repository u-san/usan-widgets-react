import React, { Component, PropTypes } from 'react';

export default class Tabs extends Component {
	render() {
		return (
			<Tabs defaultActiveKey="1" onChange={callback}>
		    <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
		    <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
		    <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
		  </Tabs>
		)
	}
}

Tabs.PropTypes = {
}