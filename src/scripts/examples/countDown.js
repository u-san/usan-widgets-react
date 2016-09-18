import React, { Component, PropTypes } from 'react';
import CountDown from '../components/countDown';

export default class CountDownExample extends Component {
	onEnd() {
		alert('done');
	}

	render() {
		return (
			<CountDown targetTime={'2016/10/1'} onEnd={this.onEnd}>
				{
					({days, hours, mins, secs}) => {
						return (
							<span>还剩{days}天{hours}时{mins}分{secs}秒</span>
						)
					}
				}
			</CountDown>
		)
	}
}