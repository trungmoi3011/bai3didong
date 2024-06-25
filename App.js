import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Square from './Square'; // Đường dẫn đến component Square

export default function App() {
  return (
    <View style={styles.container}>
      <Square color="red" />
      <Square color="blue" />
      <Square color="green" />
      <StatusBar style="auto" />
    </View>
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
