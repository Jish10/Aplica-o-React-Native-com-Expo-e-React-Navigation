
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
} from 'react-native';

const dispositivos = [
  {
    id: '1',
    nome: 'Computador',
    categoria: 'Informática',
    descricao: 'Equipamento para estudar, trabalhar e programar.',
    icone: '💻',
  },
  {
    id: '2',
    nome: 'Telemóvel',
    categoria: 'Comunicação',
    descricao: 'Dispositivo para comunicar e utilizar aplicações.',
    icone: '📱',
  },
  {
    id: '3',
    nome: 'Tablet',
    categoria: 'Dispositivos móveis',
    descricao: 'Dispositivo portátil com ecrã tátil.',
    icone: '📲',
  },
];

export default function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subtitulo}>BEM-VINDO</Text>

      <Text style={styles.titulo}>
        Os teus dispositivos
      </Text>

      <Text style={styles.texto}>
        Seleciona um dispositivo para ver os detalhes.
      </Text>

      {dispositivos.map((item) => (
        <Pressable
          key={item.id}
          style={({ pressed }) => [
            styles.cartao,
            pressed && styles.cartaoPressionado,
          ]}
          onPress={() =>
            navigation.navigate('Detalhes', {
              dispositivo: item,
            })
          }
        >
          <View style={styles.iconeFundo}>
            <Text style={styles.icone}>{item.icone}</Text>
          </View>

          <View style={styles.informacao}>
            <Text style={styles.nome}>{item.nome}</Text>

            <Text style={styles.categoria}>
              {item.categoria}
            </Text>

            <Text style={styles.descricao}>
              {item.descricao}
            </Text>
          </View>

          <Text style={styles.seta}>›</Text>
        </Pressable>
      ))}

      <Text style={styles.rodape}>
        DAM · Atividade 1
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 30,
  },
  subtitulo: {
    color: '#38BDF8',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginTop: 12,
  },
  titulo: {
    color: '#F8FAFC',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 8,
  },
  texto: {
    color: '#94A3B8',
    fontSize: 15,
    marginTop: 8,
    marginBottom: 24,
    lineHeight: 22,
  },
  cartao: {
    backgroundColor: '#1E293B',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartaoPressionado: {
    opacity: 0.7,
    borderColor: '#38BDF8',
  },
  iconeFundo: {
    width: 58,
    height: 58,
    borderRadius: 16,
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  icone: {
    fontSize: 29,
  },
  informacao: {
    flex: 1,
  },
  nome: {
    color: '#F8FAFC',
    fontSize: 17,
    fontWeight: 'bold',
  },
  categoria: {
    color: '#38BDF8',
    fontSize: 12,
    marginTop: 4,
  },
  descricao: {
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 6,
    lineHeight: 18,
  },
  seta: {
    color: '#38BDF8',
    fontSize: 28,
    marginLeft: 8,
  },
  rodape: {
    color: '#64748B',
    textAlign: 'center',
    marginTop: 18,
    fontSize: 12,
  },
});
