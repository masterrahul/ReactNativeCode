import React from 'react';
import {Home} from '@containers';



export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <>
       <Home navigation={this.props.navigation} />
        </>
    )

  }
}
