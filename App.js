import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LangWrapper, { LangModeProvider } from './src/lang/LangProvider';
import OnBoarding from './src/views/onboarding/OnBoarding';
import Home from './src/views/home/Home';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <LangModeProvider>
      <LangWrapper>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={'OnBoarding'}>
            <Stack.Screen name={'Home'} component={Home} />
            <Stack.Screen name={'OnBoarding'} component={OnBoarding} />
          </Stack.Navigator>
        </NavigationContainer>
      </LangWrapper>
    </LangModeProvider>
  );
}
