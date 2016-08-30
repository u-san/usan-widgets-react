import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import Tree from '../components/tree';

const nodes = [
    {
        value: '11100',
        title: 'app',
        children: [
            {
                value: '11110',
                title: 'Http',
                children: [
                    {
                        value: '11111',
                        title: 'Controllers',
                        children: [{
                            value: '11112',
                            title: 'WelcomeController.php',
                        }],
                    },
                    {
                        value: '11113',
                        title: 'routes.php',
                    },
                ],
            },
            {
                value: '11120',
                title: 'Providers',
                children: [{
                    value: '11121',
                    title: 'EventServiceProvider.php',
                }],
            },
        ],
    },
    {
        value: '11200',
        title: 'config',
        children: [
            {
                value: '11210',
                title: 'app.php',
            },
            {
                value: '11220',
                title: 'database.php',
            },
        ],
    },
    {
        value: '11300',
        title: 'public',
        children: [
            {
                value: '11310',
                title: 'assets',
                children: [{
                    value: '11311',
                    title: 'style.css',
                }],
            },
            {
                value: '11320',
                title: 'index.html',
            },
        ],
    },
    {
        value: '11400',
        title: '.env',
    },
    {
        value: '11410',
        title: '.gitignore',
    },
    {
        value: '11420',
        title: 'README.md',
    },
];
const checked = [
    '11112',
];
const expanded = [
    '11100',
    '11110'
];

export default class TreeExample extends Component {
    render() {
        return (
            <Tree name="airports" nodes={nodes} checked={checked} expanded={expanded} />
        )
    }
}
