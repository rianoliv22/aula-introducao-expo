import { View, Text} from 'react-native';

import styles from './styles';

export default function Atividade01(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>atividade 1</Text>
            <Text style={styles.txt}> Introdução React Native com Expo</Text>
            <Text style={styles.txt}> Curso Desenvolvimento de Sistemas Modúlo 2</Text>
            <Text style={styles.txt}> Programação Mobile </Text>
            </View>
    );
}