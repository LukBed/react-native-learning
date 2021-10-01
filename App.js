import React from 'react';
import { Image, Text, View } from 'react-native';

import Tiger from './src/assets/tiger.jpg';

export default function App() {
  return (
    <View>
      <View style={{ backgroundColor: '#006600' }}>
        <View style={{ backgroundColor: '#ff0000', width: 50, height: 50 }} />
        <Text>Hello <Text style={{ fontWeight: 'bold' }} onPress={() => alert('Touched!')}>React Native</Text></Text>
      </View>
      <Image source={Tiger} />
      <Image style={{ width: 50, height: 50}} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Bundesarchiv_Bild_183-H26258%2C_Panzer_V_%22Panther%22.jpg/480px-Bundesarchiv_Bild_183-H26258%2C_Panzer_V_%22Panther%22.jpg'}} />
    </View>
  );
}
