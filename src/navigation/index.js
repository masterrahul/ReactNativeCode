import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux'

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();



export default () => {
  const name = useSelector(state => state.user.Name)
  return (
    <NavigationContainer
     >
      <Stack.Navigator initialRouteName={ name!=''?'Home':'Login'} 
      headerMode="none">
       
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Login" component={LoginScreen} />
         
         
       
       
       </Stack.Navigator>
    </NavigationContainer>
  );
}
