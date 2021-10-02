import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

//web-style, not mobile-style
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-content: center;
`;

//px needed here
const Paragraph = styled.Text`
  background-color: grey;
  color: white;
  margin: 24px;
  font-size: 18px;
  text-align: center;
`;

const NestedText = styled.Text`
  font-weight: bold;
`;

export default function App() {
  return (
    //RN is based on flexbox, axes are reversed in comparison to web
    <Container>
      <Paragraph>
        Mauris pretium in neque in sagittis. Donec accumsan turpis ac lacus
        ullamcorper, in interdum eros hendrerit. Duis eu congue libero. Maecenas
        convallis interdum erat quis euismod.
        <NestedText>Maces finibus feugiat venenatis.</NestedText>
      </Paragraph>
      <Text>
        Nunc a aliquam lacus. Aliquam leo quam, feugiat nec fermentum a, iaculis
        eget nisl. Vivamus ut tellus quis velit dictum bibendum. Nulla nec
        consequat turpis. Etiam congue auctor tellus, vel dictum nulla faucibus
        vitae.
      </Text>
    </Container>
  );
}
