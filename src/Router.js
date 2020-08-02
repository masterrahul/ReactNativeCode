/**
 * Created by InspireUI on 19/02/2017.
 *
 * @format
 */

import React from "react";
import {StatusBar,SafeAreaView } from "react-native";
import Navigation from "@navigation";
import { connect } from "react-redux";


class Router extends React.PureComponent {
  
 render() {
    
    return (
      <>
     <StatusBar  barStyle='dark-content' />
      <SafeAreaView style={{ backgroundColor: '#fff',flex:1}}>
        <Navigation />
     </SafeAreaView>
    </>
       );
    }
  }

  const mapStateToProps = state => {
    return {
     // session_id: state.user.session_id,
     // network: state.network,
    };
  };

export default connect(mapStateToProps)(Router);
