import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'

import Exemplo01 from './src/exemplos/ex01';

import Atividade01 from './src/atividades/atv01';

import Exemplo02 from './src/exemplos/ex02';

import Atividade02 from './src/atividades/atv02';



export default function App() {
  return (
    <View style={styles.container}>
      <Atividade02/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fbff00ff',
    padding: 10,
    paddingTop: Constants.statusBarHeight,
  },
})