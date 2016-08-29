import React, { Component } from 'react'
import { render } from 'react-dom'
import { hashHistory, Router, Route, IndexRoute} from 'react-router'
import App from '../examples'
import Tabs from '../examples/tabs'
import Tree from '../examples/tree'

export default class Root extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={App} />
				<Route path="/tabs" component={Tabs} />
				<Route path="/tree" component={Tree} />
			</Router>
		)
	}
}