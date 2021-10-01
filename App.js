import React from 'react';
import { Text, Platform, SafeAreaView } from 'react-native';

export default function App() {
  return (
    //SafeAreaView - only IOS11+, safe margin, very useful, works as normal view on Android
    <SafeAreaView>
      <Text
        style={{
          backgroundColor: Platform.OS === 'android' ? 'green' : 'red',
        }}>
        {Platform.OS}
      </Text>
      <Text
        style={{
          ...Platform.select({
            android: {
              backgroundColor: 'orange',
            },
          }),
        }}>
        {Platform.OS}
      </Text>
    </SafeAreaView>
  );
}
