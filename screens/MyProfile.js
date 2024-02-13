// ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      {/* Add profile information and components here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#152238', // Set the background color to match the tab bar
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff', // Set the text color to white or a color that contrasts well with the background
  },
});

export default ProfileScreen;
