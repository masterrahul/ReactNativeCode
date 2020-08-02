import React, {PureComponent} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,

  
} from 'react-native';

import {connect} from 'react-redux';

import {CommonActions } from '@react-navigation/native';


class HomeScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }



  render() {

    return (
      <View
        style={{ flex: 1, 
          
          alignItems:"center" }}
      >
<Text style={{fontSize:20,
  backgroundColor:'blue',
  color:'#fff',
  width:'100%',
  padding:5,
  textAlign:"center"
  }}>User Profile</Text>

    <Image
         style={{
           height:150,
           width:150,
           borderRadius:75,
           borderWidth:1,
           borderColor:'#000',
           marginTop:50
         }}
         source={{uri:this.props.image}}
        />
        <Text style={{fontSize:18,
          fontWeight:'bold',
          marginTop:20
          }}>User Name:{this.props.Name}</Text>

       <TouchableOpacity onPress={() => { 
         this.props.navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              { name: 'Login' },
             ],
          })
        );
                            }}>
					<View style={styles.buttonContainer}>
						<Text style={styles.buttonLabel}>Log Out</Text>
					</View>
				</TouchableOpacity>
        
    
       
      </View>
    );
  }
}

const styles = StyleSheet.create({


    buttonContainer: {
      height: 50,
      borderRadius: 25,
      backgroundColor: '#00e3cf',
      marginHorizontal: 20,
     
      alignItems: 'center',
      justifyContent: 'center',
      width:200,
      marginTop:100
    
    },
    buttonLabel: {
      color: '#ffffff',
      fontSize: 20,
      fontWeight: '700'
    },
});

HomeScreen.defaultProps = {
  Name: '',
  Image:''
};

const mapStateToProps = state => {
  return {
    Name: state.user.Name,
    image: state.user.image,
    network: state.network,
  };
};



export default connect(mapStateToProps, null)(HomeScreen);
