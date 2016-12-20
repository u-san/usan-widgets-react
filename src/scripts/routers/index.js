import React, { Component } from 'react'
import { render } from 'react-dom'
import { hashHistory, Router, Route, IndexRoute} from 'react-router'
import App from '../pages'
import Tabs from '../pages/tabs'
import Tree from '../pages/tree'
import CountDown from '../pages/countDown'

export default class Root extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={App} />
				<Route path="/tabs" component={Tabs} />
				<Route path="/tree" component={Tree} />
				<Route path="/countDown" component={CountDown} />
			</Router>
		)
	}
}