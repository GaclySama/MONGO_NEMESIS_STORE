import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Header from '../common/Header';

const Actualizar = () => {

    /* let isValid = true; */
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpass, setConfirmpass] = useState('');
    const [buttonDisabled, setButtonDisabled ] = useState(false);

    /* const validate = () => {
        setButtonDisabled(true);

        if(name == ''){
            setBadName(true);
            isValid = false;
        }else{
            setBadName(false);
            if(name == ''){
                setBadLastname(true);
                isValid = false;
            }else{
                setBadLastname(false);
                if(lastname == ''){
                    setBadEmail(true);
                    isValid = false;
                }else{
                    setBadEmail(false);
                    if(password == ''){
                        setBadPassword(true);
                        isValid = false;
                    }else{
                        setBadPassword(false);
                        if(confirmpass == ''){
                            setBadConfirmpass(true);
                            isValid = false;
                        }else{
                            setBadConfirmpass(false);
                            if(password !== confirmpass){
                                setBadConfirmpass(true);
                                isValid = false;
                            }else{
                                setBadConfirmpass(false);
                            }
        
                        }
        
                    }
        
                }
        
            }
        
        }

    setTimeout(() => {
        console.log(isValid);
        if(isValid == true){
            saveData();
        }else{
            setButtonDisabled(false);
        }
    },2000);
}; */

    /* const saveData = async () => {
            await AsyncStorage.setItem('NAME', name);
            await AsyncStorage.setItem('LASTNAME', lastname);
            await AsyncStorage.setItem('EMAIL', email);
            await AsyncStorage.setItem('PASSWORD', password);
            console.log(':yes');
            navigation.goBack();
        } */
    

    return (
    <View style={{flex:1}}>
        <Header
        leftIcon={require('../images/back.png')}
        title={'Actualizar Datos'}
        onClickLeftIcon={() => {
        navigation.goBack();
        }}
        />
        <View style={{top:20, justifyContent:'center',alignItems:'center'}}>
            <TextInput style={styles.Input} placeholder='Nombres' value={name} onChangeText={txt => setName(txt)} />
            <TextInput style={styles.Input} placeholder='Apellidos' value={lastname} onChangeText={txt => setLastname(txt)} />
            <TextInput style={styles.Input} placeholder='Correo@gmail.com' value={email} onChangeText={txt => setEmail(txt)} />
            <View style={{backgroundColor:'#c7ecee', padding:5, borderRadius:15, top:30, justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontWeight:'bold'}}> Para confirmar los cambios ingresa la contraseña:</Text>
            <TextInput style={styles.Input2} placeholder='Contraseña' value={password} onChangeText={txt => setPassword(txt)} />
            <TextInput style={styles.Input2} placeholder='Confirmar contraseña' value={confirmpass} onChangeText={txt => setConfirmpass(txt)} />
            <Pressable style={styles.Btn} onPress={() => {validate();}} disabled={buttonDisabled} ><Text style={styles.BtnText}>Actualizar</Text></Pressable>
            </View>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    Input:{
        width:'85%', 
        height:50,
        borderWidth:0.5, 
        borderRadius:10,
        alignSelf:'center',
        padding:10,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center'
    },
    Input2:{
        width:250, 
        height:50,
        borderWidth:0.5, 
        borderRadius:10,
        alignSelf:'center',
        padding:10,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center'
    },
    user: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 50,
    },
    Btn:{
        width:150,
        marginTop:20,
        paddingVertical:10,
        backgroundColor:'#F79F1F',
        borderRadius:10
    },
    Create:{
        marginTop:15,
        fontWeight:'bold',
        fontStyle:'italic',
        textDecorationLine:'underline'
    }, 
    BtnText:{
        fontSize:16,
        textAlign:'center',
        justifyContent:'center',
        color:'#fff'
    }
});

export default Actualizar;