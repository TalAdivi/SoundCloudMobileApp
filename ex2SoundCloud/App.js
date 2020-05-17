import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/components/mainScreen';
import LastQueries from './src/components/LastQueries';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainScreen">
          <Stack.Screen
            name="mainScreen"
            component={MainScreen}
            options={{
              title: 'MainScreen ',
              headerStyle: {
                backgroundColor: '#000000'
              },
              headerTintColor: '#FFFFFF',
              headerTitleAlign: 'center'
            }}
          />
          <Stack.Screen
            name="lastQueries"
            component={LastQueries}
            options={{
              title: 'lastQueries',
              headerStyle: {
                backgroundColor: '#000000'
              },
              headerTintColor: '#FFFFFF',
              headerTitleAlign: 'center'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
