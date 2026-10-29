
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';

export default function Detalhes({ route, navigation }) {
  const { dispositivo } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.cartao}>
        <View style={styles.iconeFundo}>
          <Text style={styles.icone}>
            {dispositivo.icone}
          </Text>
        </View>

        <Text style={styles.titulo}>
          {dispositivo.nome}
        </Text>

        <Text style={styles.categoria}>
          {dispositivo.categoria}
        </Text>

        <View style={styles.linha} />

        <Text style={styles.rotulo}>Descrição</Text>

        <Text style={styles.descricao}>
          {dispositivo.descricao}
        </Text>

        <Text style={styles.mensagem}>
          Selecionaste este dispositivo na página inicial.
        </Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.botao,
          pressed && styles.botaoPressionado,
        ]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoBotao}>
          ‹  Voltar à Home
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    padding: 20,
    justifyContent: 'center',
  },
  cartao: {
    backgroundColor: '#1E293B',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#334155',
    padding: 24,
    alignItems: 'center',
  },
  iconeFundo: {
    width: 100,
    height: 100,
    borderRadius: 25,
    backgroundColor: '#0F172A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  icone: {
    fontSize: 52,
  },
  titulo: {
    color: '#F8FAFC',
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  categoria: {
    color: '#38BDF8',
    fontSize: 14,
    marginTop: 8,
  },
  linha: {
    height: 1,
    backgroundColor: '#334155',
    width: '100%',
    marginVertical: 24,
  },
  rotulo: {
    color: '#F8FAFC',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  descricao: {
    color: '#CBD5E1',
    fontSize: 15,
    lineHeight: 24,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  mensagem: {
    color: '#64748B',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 24,
    lineHeight: 18,
  },
  botao: {
    backgroundColor: '#0284C7',
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    marginTop: 22,
  },
  botaoPressionado: {
    backgroundColor: '#0369A1',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
