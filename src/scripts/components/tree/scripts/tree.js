import React, { Component, PropTypes } from 'react';
import TreeNode from './TreeNode';
import 'font-awesome-webpack';
import '../styles/index.less';

export default class Tree extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: props.checked,
            expanded: props.expanded
        };

        this.handleCheck = this.handleCheck.bind(this);
    }

    static defaultProps = {
        prefixCls: 'usan-tree',
        checked: [],
        expanded: []
    };

    static propTypes = {
        name: PropTypes.string,
        nodes: PropTypes.array,
        checked: PropTypes.array,
        expanded: PropTypes.array,
        getValue: PropTypes.func
    };

    componentDidMount() {
        this.props.getValue(this.state.checked);
    }

    getFormattedNodes(nodes) {
        return nodes.map((node) => {
            let formatted = Object.assign(node);

            formatted.checked = this.state.checked.indexOf(node.value) > -1;
            formatted.collapsed = this.state.expanded.indexOf(node.value) === -1;

            if (this.hasChildren(node)) {
                formatted.children = this.getFormattedNodes(formatted.children);
            }

            return formatted;
        });
    }

    getTreeNodes(nodes) {
        const treeNodes = nodes.map((node, index) => {
            const checked = this.getCheckState(node);
            const children = this.getChildNodes(node);
            const { name, prefixCls } = this.props;

            return (
                <TreeNode
                    key={index}
                    name={name}
                    prefixCls={prefixCls}
                    value={node.value}
                    title={node.title}
                    checked={checked}
                    collapsed={node.collapsed}
                    rawChildren={node.children}
                    onCheck={this.handleCheck} >
                    {children}
                </TreeNode>
            );
        });

        return (
            <ol>
                {treeNodes}
            </ol>
        );
    }

    getCheckState(node) {
        if (!this.hasChildren(node)) {
            return node.checked ? 1 : 0;
        }

        if (this.isEveryChildChecked(node)) {
            return 1;
        }

        if (this.isSomeChildChecked(node)) {
            return 2;
        }

        return 0;
    }

    getChildNodes(node) {
        if (this.hasChildren(node)) {
            return this.getTreeNodes(node.children);
        }

        return null;
    }

    getHiddenInput() {
        if (this.props.name === undefined) {
            return null;
        }

        const checked = this.state.checked.join(',');

        return <input name={this.props.name} value={checked} type="hidden" />;
    }

    setCheckState(node, isChecked) {
        if (this.hasChildren(node)) {

            node.children.forEach((child) => {
                this.setCheckState(child, isChecked);
            });
        } else {

            const index = this.state.checked.indexOf(node.value);

            if (index > -1) {
                this.state.checked.splice(index, 1);
            }

            if (isChecked) {
                this.state.checked.push(node.value);
            }
        }
    }

    isEveryChildChecked(node) {
        return node.children.every((child) => {
            if (this.hasChildren(child)) {
                return this.isEveryChildChecked(child);
            }

            return child.checked;
        });
    }

    isSomeChildChecked(node) {
        return node.children.some((child) => {
            if (this.hasChildren(child)) {
                return this.isSomeChildChecked(child);
            }

            return child.checked;
        });
    }

    hasChildren(node) {
        if (!node.children || !this.isArray(node.children)) {
            return false;
        }

        return node.children.length > 0;
    }

    isArray(arr) {
        return Object.prototype.toString.call(arr) === '[object Array]';
    }

    handleCheck(node) {
        const isChecked = node.checked;

        this.setCheckState(node, isChecked);

        this.setState({
            checked: this.state.checked,
        });

        this.props.getValue(this.state.checked);
    }

    render() {
        const { nodes, prefixCls } = this.props;
        const treeNodes = this.getTreeNodes(this.getFormattedNodes(nodes));

        return (
            <div className={`${prefixCls}-wrap`}>
                {this.getHiddenInput()}
                {treeNodes}
            </div>
        );
    }
}
