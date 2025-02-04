
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Pagado () {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(true);

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
            >
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Image 
                source={require('../images/checked.png')}  
                style={{width: 100, height: 100 }} 
                />
                <Text style={styles.msg}>¡Solicitud de compra realizado con exito!</Text>
                <Text
                style={styles.btn}
                onPress={() => {
                    setModalVisible(false);
                }}>
                Cerrar
                </Text>
            </View>
            </View>
        </Modal>
        
    );  
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
    },
    modalView: {
        width:270,
        height:270,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    ModaText:{
        fontSize:16,
        textAlign:'center',
        justifyContent:'center',
        color:'#000',
    },
    btn: {
      padding: 10,
      borderRadius:15,
      borderWidth: 1,
      color: '#000',
      marginTop: 20,
    },
    msg: {
      justifyContent:'center',
      alignItems: 'center',
      marginTop: 10,
      fontSize: 16,
      color: '#000',
    }
});

export default Pagado