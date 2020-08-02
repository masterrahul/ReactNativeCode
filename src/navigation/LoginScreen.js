import React from 'react';
import {Login} from '@containers';


export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Login navigation={this.props.navigation} />;
  }
}
