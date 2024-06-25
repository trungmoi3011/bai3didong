// Square.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

const Square = ({ color }) => {
  return <View style={[styles.square, { backgroundColor: color }]} />;
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    margin: 10, // Khoảng cách giữa các hình vuông
  },
});

export default Square;
