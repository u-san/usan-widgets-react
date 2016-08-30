import React, { Component, PropTypes } from 'react';

export default class TreeNode extends Component {

	constructor(props) {
		super(props);

		this.state = {
			collapsed: props.collapsed,
		};

		this.handleCollapseClick = this.handleCollapseClick.bind(this);
		this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
	}

	static propTypes = {
		prefixCls: PropTypes.string,
		name: React.PropTypes.string,
		value: React.PropTypes.string,
		title: React.PropTypes.string,
		children: React.PropTypes.node,
		checked: React.PropTypes.number,
		collapsed: React.PropTypes.bool,
		rawChildren: React.PropTypes.any,
		onCheck: React.PropTypes.func,
	};

	getCollapseIcon() {
		if (!this.props.children) {
			return <i className="fa" />;
		}

		if (this.state.collapsed) {
			return <i className="fa fa-caret-right" />;
		}

		return <i className="fa fa-caret-down" />;
	}

	getCheckboxIcon() {
		if (this.props.checked === 0) {
			return <i className="fa fa-square-o" />;
		}

		if (this.props.checked === 1) {
			return <i className="fa fa-check-square-o" />;
		}

		return <i className="fa fa-minus-square-o" />;
	}

	getNodeIcon() {
		if (!this.props.children) return <i className="fa fa-file-o" />;

		if (this.state.collapsed) {
			return <i className="fa fa-folder-o" />;
		}

		return <i className="fa fa-folder-open-o" />;

	}

	getChildren() {
		if (this.state.collapsed) {
			return null;
		}

		return this.props.children;
	}

	handleCollapseClick() {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	}

	handleCheckboxClick() {
		const { checked, onCheck, value, rawChildren } = this.props;
		let isChecked = 0;

		if (checked === 0 || checked === 2) {
			isChecked = 1;
		}

		onCheck({
			value: value,
			checked: isChecked,
			children: rawChildren,
		});
	}

	render() {
		const { title, prefixCls } = this.props;

		return (
			<li className={`${prefixCls}-node`} >
				<span className={`${prefixCls}-text`} >
					<span className={`${prefixCls}-collapse`} onClick={this.handleCollapseClick} >
						{this.getCollapseIcon()}
					</span>
					<label onClick={this.handleCheckboxClick} >
						<span className={`${prefixCls}-checkbox`} >
							{this.getCheckboxIcon()}
						</span>
						<span className={`${prefixCls}-icon`} >
							{this.getNodeIcon()}
						</span>
						<span className={`${prefixCls}-title`} >
							{title}
						</span>
					</label>
				</span>
				{this.getChildren()}
			</li>
		);
	}
}
