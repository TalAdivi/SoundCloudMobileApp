import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TestComponent from './src/components/TestComponent';
import MainScreen from './src/components/mainScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainScreen">
          {/* <Stack.Screen
            name="TestComponent"
            component={TestComponent}
            options={{ title: 'TestComponent' }}
          /> */}
          <Stack.Screen
            name="mainScreen"
            component={MainScreen}
            options={{ title: 'MainScreen' }}
          />

          {/* <View style={styles.container}>
            <TestComponent />
            <Text>Open up App.js to start working on your app!!</Text>
          </View> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
