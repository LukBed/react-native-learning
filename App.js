import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';

const mock = new Array(100)
  .fill(null)
  .map((item, idx) => ({ id: `id${idx}`, label: `${idx}. Lorem` }));

export default function App() {
  const [value, setValue] = useState('');

  //ScrollView is not the best if we have a lot of similar elements - performance!
  return (
    <View>
      <Text>{value}</Text>
      <TextInput value={value} onChangeText={text => setValue(text)} />
      <ScrollView>
        {mock.map(item => (
          <Text key={item.id}>{item.label}</Text>
        ))}
      </ScrollView>
    </View>
  );
}
