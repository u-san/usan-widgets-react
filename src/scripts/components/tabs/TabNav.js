import React, {Component, PropTypes}from 'react';

export default class TabNav extends Component {
	render() {
		console.log(this.props)
		return (
			<ul>
				{this.props.panes.map((pane, index) => {
					return <li key={index + 1}>{pane.props.tabTitle}</li>
				})}
			</ul>
		)
	}
}

TabNav.propTypes = {
	activeKey: PropTypes.string,
	panes: PropTypes.any,
};