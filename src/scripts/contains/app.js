import React, { Component, PropTypes } from 'react';
import TabsExample from '../components/tabs';

export default class App extends Component {
  render() {
    const { todos, actions, filters } = this.props;
      return (
      <div>
       <TabsExample />
      </div>
    )
  }
}
