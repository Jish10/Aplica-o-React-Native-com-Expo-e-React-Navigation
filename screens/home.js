
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Escolhe um item</Text>

      <Button
        title="Computador"
        onPress={() =>
          navigation.navigate('Detalhes', {
            parametro: 'Computador'
          })
        }
      />

      <Button
        title="Telemóvel"
        onPress={() =>
          navigation.navigate('Detalhes', {
            parametro: 'Telemóvel'
          })
        }
      />

      <Button
        title="Tablet"
        onPress={() =>
          navigation.navigate('Detalhes', {
            parametro: 'Tablet'
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    gap: 15
  },
  titulo: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20
  }
});
