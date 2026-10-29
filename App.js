
import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/home';
import Detalhes from './screens/detalhes';

const Stack = createNativeStackNavigator();

const temaEscuro = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#38BDF8',
    background: '#0F172A',
    card: '#111827',
    text: '#F8FAFC',
    border: '#263449',
    notification: '#38BDF8',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={temaEscuro}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#111827' },
          headerTintColor: '#F8FAFC',
          headerTitleStyle: { fontWeight: 'bold' },
          contentStyle: { backgroundColor: '#0F172A' },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'TechStore' }}
        />

        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{ title: 'Detalhes do dispositivo' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
