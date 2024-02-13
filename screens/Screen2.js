// screens/Screen2.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Screen2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 2 Content</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Background color
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: '#333', // Text color
  },
});

export default Screen2;
