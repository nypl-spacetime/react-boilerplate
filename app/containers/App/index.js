import React from 'react';
import { connect } from 'react-redux';

import {
  loadData,
} from '../App/actions';

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
    loadData: React.PropTypes.object,
  };

  componentWillMount() {
    this.props.loadData();
  }

  render() {
    return (
      <div>
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: () => dispatch(loadData()),
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(App);
