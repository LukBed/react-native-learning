import React from 'react';
import { View, Text, Button } from 'react-native';
import { SCREENS } from '../../../navigation/constants';

export default function OnBoarding({ navigation }) {
  return (
    <View>
      <Text>Hello</Text>
      <Button
        title={'Sign up'}
        onPress={() => navigation.navigate(SCREENS.AUTH.SIGN_UP.ID)}
      />
      <Button
        title={'Login'}
        onPress={() => navigation.navigate(SCREENS.AUTH.LOGIN.ID)}
      />
    </View>
  );
}
