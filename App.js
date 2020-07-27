import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import MapCircle from './components/MapCircle';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Covid-19 Helper" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapCircle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
