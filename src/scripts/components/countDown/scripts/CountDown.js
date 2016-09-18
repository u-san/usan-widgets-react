import React, { Component, PropTypes } from 'react';
import { leftpad } from './util';

export default class CountDown extends Component {
	constructor(props) {
		super(props)
		this.state = {
			restTime: this.restTime()
		};

		this.updateTime = this.updateTime.bind(this);

		this.timer = setTimeout(this.updateTime, 1000);
	}

	static defaultProps = {
		onEnd(){}
	};

	static porpTypes = {
		targetTime: PropTypes.string,
		children: PropTypes.any,
		onEnd: PropTypes.func
	};

	componentWillUnmount() {
	    clearTimeout(this.timer);
	}

	restTime() {
		const { targetTime } = this.props;
		const restTime = parseInt((new Date(targetTime).valueOf() - new Date().valueOf()) / 1000);

		return restTime < 0 ? 0 : restTime;
	}

	formateTime(restTime) {

		const lp = time => leftpad(time, 2, 0);
		const days = lp(parseInt(restTime / (24 * 60 * 60)));
		const hours = lp(parseInt(restTime / (60 * 60) % 24));
		const mins = lp(parseInt(restTime / 60 % 24));
		const secs = lp(parseInt(restTime % 60));

		return {
			days,
			hours,
			mins,
			secs
		};
	}

	updateTime() {
		const { targetTime, onEnd } = this.props;
		const restTime = this.restTime();

		this.setState({restTime: restTime});

		if (restTime <= 0) {
			onEnd();
			clearTimeout(this.timer);
			return;
		}

		this.timer = setTimeout(this.updateTime, 1000);

	}

	render() {
		const { restTime } = this.state;
		const { children } = this.props;
		const data = this.formateTime(restTime);

		return (
			<div>
			{
				children(data)
			}
			</div>
		)
	}
}