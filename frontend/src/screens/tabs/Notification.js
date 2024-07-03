import {View, Text} from 'react-native';
import React from 'react';
import Toast from 'react-native-toast-message';

  const notificaErrorIngreso = async (titulo = 'Error al Ingresar', mensaje= 'Correo o contraseña invalida', time= 2000) => {
    setTimeout(()=> {
        Toast.show({
            type:'error',
            text1:titulo,
            text2:mensaje,
            autoHide: true,
            visibilityTime: time,
        })
    })
  };

  const notificaErrorRegistro = async (titulo = 'Error al Ingresar', mensaje= 'Correo o contraseña invalida', time= 2000) => {
    setTimeout(()=> {
        Toast.show({
            type:'error',
            text1:titulo,
            text2:mensaje,
            autoHide: true,
            visibilityTime: time,
        })
    })
  };

  const notificaSuccessIngreso = async () => {
    setTimeout(()=> {
        Toast.show({
            type:'success',
            text1:'Acceso valido',
            text2:'Has iniciado sesion..',
            autoHide: true,
            visibilityTime:2000,
        })
    })
  };

  const notificaSuccessRegistro = async () => {
    setTimeout(()=> {
        Toast.show({
            type:'success',
            text1:'Registro valido',
            text2:'¡Te has registrado exitosamente!',
            autoHide: true,
            visibilityTime:2000,
        })
    })
  };

  const notificaInfo = async () => {
    setTimeout(()=> {
        Toast.show({
            type:'info',
            text1:'Producto añadido',
            text2:'añadido al carro de compra',
            autoHide: true,
            visibilityTime:2000,
        })
    })
  };

  const notificaInfoRecover = async () => {
    setTimeout(()=> {
        Toast.show({
            type:'info',
            text1:'Correo enviado',
            text2:'Ha sido enviado el link de recuperacion al correo',
            autoHide: true,
            visibilityTime:2000,
        })
    })
  };

  const notificaInfoNoRecover = async () => {
    setTimeout(()=> {
        Toast.show({
            type:'info',
            text1:'Correo invalido',
            text2:'Por favor verifica el correo',
            autoHide: true,
            visibilityTime:2000,
        })
    })
  };

  const notificaInfoWishList = async () => {
    setTimeout(()=> {
        Toast.show({
            type:'info',
            text1:'Producto deseado',
            text2:'añadido a la lista de productos deseados',
            autoHide: true,
            visibilityTime:2000,
        })
    })
  };

export {notificaErrorIngreso, 
        notificaErrorRegistro, 
        notificaInfo, 
        notificaSuccessIngreso, 
        notificaSuccessRegistro, 
        notificaInfoRecover,  
        notificaInfoNoRecover,
        notificaInfoWishList};
