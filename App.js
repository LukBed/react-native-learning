import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

//better performance also!
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  paragraph: {
    backgroundColor: 'grey',
    color: 'white',
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
  nestedText: {
    fontWeight: 'bold',
  },
});

export default function App() {
  return (
    //RN is based on flexbox, axes are reversed in comparison to web
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Mauris pretium in neque in sagittis. Donec accumsan turpis ac lacus
        ullamcorper, in interdum eros hendrerit. Duis eu congue libero. Maecenas
        convallis interdum erat quis euismod.
        <Text style={styles.nestedText}>
          Maecenas finibus feugiat venenatis.
        </Text>
      </Text>
      <Text>
        Nunc a aliquam lacus. Aliquam leo quam, feugiat nec fermentum a, iaculis
        eget nisl. Vivamus ut tellus quis velit dictum bibendum. Nulla nec
        consequat turpis. Etiam congue auctor tellus, vel dictum nulla faucibus
        vitae.
      </Text>
    </SafeAreaView>
  );
}
