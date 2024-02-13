// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#152238', // Set your desired background color
            borderTopColor: 'transparent', // Optional: To remove the top border
          },
        }}
      >
        <Tab.Screen name="Screen1" component={Screen1} options={{ title: 'Home Page' }} />
        <Tab.Screen name="Screen2" component={Screen2} options={{ title: 'Contacts' }} />
        <Tab.Screen name="Screen3" component={Screen3} options={{ title: 'Calculator' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;

