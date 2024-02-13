import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Awesome App!</Text>
      <Text style={styles.description}>
        Explore and enjoy the amazing features of our app.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#3498db', // Set your desired background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#001f3f', // Set the text color to dark blue
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#001f3f', // Set the text color to dark blue
  },
});

export default Screen1;
