import { View, Text, Image } from 'react-native';

import styles from './styles';

import Mensagem from './mensagem';

function Atividade02 () {
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Atividade 2</Text>

    <Mensagem titulo={'CAMISA VERMELHA'}>CAMISA Nº 1 DO TIME </Mensagem>
      <Mensagem titulo={'CAMISA BRANCA'}>CAMISA Nº 2 DO TIME </Mensagem>
        <Mensagem titulo={'CAMISA PRETA'}>CAMISA Nº 3 DO TIME </Mensagem>
      </View>
      );
      }


export default Atividade02;
