import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ContainerView } from './styles';

export function Groups() {
  return (
    <ContainerView>
      <Text>Oi</Text>
    </ContainerView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
