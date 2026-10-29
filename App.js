
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/home';
import Detalhes from './screens/detalhes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Página Inicial' }}
        />

        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{ title: 'Detalhes do Item' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
