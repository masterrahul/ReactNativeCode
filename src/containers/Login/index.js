import React, {PureComponent} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
    ActivityIndicator,
  
} from 'react-native';

import {connect} from 'react-redux';
import {Images} from '@common';
import Api from '@services/Api'
import {CommonActions } from '@react-navigation/native';

class LoginScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading:false,
      UserEmail:'Androboss06@gmail.com',
      UserPassword:'Andro@123'
    };
  }

  componentDidMount() {
    this.props.logout();
  }

  login(){
    const {UserEmail,UserPassword}=this.state
    if(UserEmail==""){
      alert('enter UserEmail')
    }else if(UserPassword==''){
      alert('enter UserPassword')
    }else if(!this.props.network.isConnected){

      alert('No Internet')
      
    }else{
      this.UserLoginFunction()
    }
  }

  UserLoginFunction = () =>{
 

    const { UserEmail ,UserPassword}  = this.state ;

    Api.login_api(UserEmail,UserPassword)
    .then(responseJson => {
      console.log('login', responseJson);
   this.setState({loading:false})
      if (responseJson.ok) {
        this.setState({
          loading: false,
        });

        if (responseJson.data != null) {
          if (responseJson.data.hasOwnProperty('status')) {
          
              if (responseJson.data.status == 'success') {
              if (responseJson.data.hasOwnProperty('message')) {
           
                 alert(responseJson.data.message)

                   if(responseJson.data.hasOwnProperty("data")){
                       if(responseJson.data.data.length>0){
 this.props.login(responseJson.data.data[0]);
                          this.props.navigation.dispatch(
                              CommonActions.reset({
                                index: 0,
                                routes: [
                                  { name: 'Home' },
                            
                             
                                
                                ],
                              })
                            );
                       }
                   }

              }
            } else if (responseJson.data.status == 'failed') {
              if (responseJson.data.hasOwnProperty('message')) {
              
           

                  alert(responseJson.data.message)
              }
            } else {
             
              alert('server error')
            }
          } else {
            alert('server error')
          }
        } else {
          alert('server error')
        }
      } else {
        if (responseJson.problem == 'NETWORK_ERROR') {
          alert('server error')
          this.setState({
            loading: false,
          });
        } else if (responseJson.problem == 'TIMEOUT_ERROR') {
          alert('server error')
          this.setState({
            loading: false,
          });
        } else {
          alert('server error')
          this.setState({
            loading: false,
          });
        }
      }
    })
    .catch(error => {
      console.error(error);
      this.setState({
        loading: false,
      });
    });
     }

  render() {
    const {loading,UserEmail,UserPassword}=this.state
    return (
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: 'white' }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
    
        <Image style={styles.picture}
          source={Images.bglogin}
          />
<Text style={{fontSize:25,
              textAlign:'center',
              fontWeight:'bold'
              }}>React Native Code</Text>

     <View style={styles.container}>
				{
					loading &&
					(
            <ActivityIndicator size="small" color="#0000ff" />
					)
        }
          

				<TextInput
					placeholder="Email"
					placeholderTextColor="grey"
					returnKeyType="next"
					onSubmitEditing={() => this.pass_tn.focus()}
					onChangeText={text => this.setState({ UserEmail: text })}
					value={UserEmail}
					style={styles.input}
				/>
				<TextInput
          ref={(id)=>{this.pass_tn=id}}
					placeholder="Password"
					placeholderTextColor="grey"
					secureTextEntry={true}
					autoCapitalize="none"
					returnKeyType="done"
					onChangeText={text => this.setState({ UserPassword: text })}
					value={UserPassword}
					style={styles.input}
				/>
				<TouchableOpacity onPress={() => this.login()}>
					<View style={styles.buttonContainer}>
						<Text style={styles.buttonLabel}>Log in</Text>
					</View>
				</TouchableOpacity>
        </View>


       
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({

  picture: {
   height:250,
   width:"100%",
   margin:50,
   alignSelf:'center'
   
    },

    container: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    input: {
      height: 50,
      color: 'black',
      borderRadius: 25,
      marginVertical: 5,
      marginHorizontal: 20,
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: '#eee',
      fontSize: 18,
    },
    buttonContainer: {
      height: 50,
      borderRadius: 25,
      backgroundColor: '#00e3cf',
      marginHorizontal: 20,
      marginVertical: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonLabel: {
      color: '#ffffff',
      fontSize: 20,
      fontWeight: '700'
    },
});

LoginScreen.defaultProps = {
  id: '',
};

const mapStateToProps = state => {
  return {

    network: state.network,
  };
};

const mapDispatchToProps = dispatch => {
  const {actions} = require('@redux/UserRedux');

  return {
    login: customers => dispatch(actions.login(customers)),
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
