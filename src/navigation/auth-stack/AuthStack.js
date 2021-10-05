import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREENS } from '../constants';
import OnBoarding from '../../views/auth/onboarding/OnBoarding';
import LoginScreen from '../../views/auth/login';
import SignUpScreen from '../../views/auth/signup';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName={SCREENS.AUTH.ONBOARDING.ID}>
      <Stack.Screen name={SCREENS.AUTH.ONBOARDING.ID} component={OnBoarding} />
      <Stack.Screen name={SCREENS.AUTH.SIGN_UP.ID} component={SignUpScreen} />
      <Stack.Screen name={SCREENS.AUTH.LOGIN.ID} component={LoginScreen} />
    </Stack.Navigator>
  );
}
