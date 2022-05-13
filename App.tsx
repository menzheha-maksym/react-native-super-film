/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React from 'react';
import Episodes from './src/pages/Episodes';
import Home from './src/pages/Home';

const Stack = createNativeStackNavigator();

const headerStyle: NativeStackNavigationOptions = {
  headerStyle: {backgroundColor: 'rgb(220, 220, 220)'},
  headerTintColor: '#180101',
  headerTitleStyle: {
    fontWeight: '100',
  },
  headerTitleAlign: 'center',
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'SUPER FILM', ...headerStyle}}
        />
        <Stack.Screen
          name="Episodes"
          component={Episodes}
          options={{title: 'SUPER FILM', ...headerStyle}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
