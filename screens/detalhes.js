
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Detalhes({ route }) {
  const { parametro } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalhes do Item</Text>

      <Text style={styles.texto}>
        Selecionaste: {parametro}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20
  },
  texto: {
    fontSize: 20,
    color: 'blue'
  }
});
