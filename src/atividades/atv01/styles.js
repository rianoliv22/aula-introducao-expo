import { StyleSheet } from "react-native"; 
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";



const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor:'#4668ffc9',
            alignItems: 'center',
            justifyContent: 'space-evenly'
        },

        titulo: {
            fontSize:RFPercentage(5),
            fontWeight: 'bold',
            color: '#ffd000ff',
        },
        txt: {
            fontSize: RFPercentage(3),
            color: '#ffe600ff',
            fontStyle:'italic',
            fontFamily:'Georgia',
        },

    }
);

export default styles;
