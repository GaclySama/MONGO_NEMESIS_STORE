import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../../common/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const User = () => {
  const [user, setUser] = useState({ email: '', name: '' });
  const navigation = useNavigation();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userData = await AsyncStorage.getItem('@user');
        if (userData) {
          const { email, name } = JSON.parse(userData);
          setUser({ email, name });
        }
      } catch (error) {
        console.error('Failed to load user from AsyncStorage:', error);
      }
    };

    loadUser();
  }, []);

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('@accessToken');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Header title={'Perfil de usuario'} />
      <Image
        source={require('../../images/profile.png')}
        style={styles.user}
      />
      <Text style={styles.name}>{ user.name }</Text>
      <Text style={[styles.email, {fontSize: 16, marginTop: 0}]}>
        {  user.email }
      </Text>
      <TouchableOpacity style={[styles.tab, {marginTop: 40}]}
        onPress={() => {
          navigation.navigate('Actualizar');
        }}>
        <Text style={styles.txt}>Editar Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, {marginTop: 10}]}
        onPress={() => {
          navigation.navigate('Imprime');
        }}>
        <Text style={styles.txt}>Movimientos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, {marginTop: 10}]}
        onPress={logout}>
        <Text style={styles.txt}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  user: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 50,
  },
  name: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 23,
    fontWeight: '600',
    color: '#000',
  },
  email: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 23,
    fontWeight: '600',
    color: '#95a5a6',
  },
  tab: {
    width: '90%',
    height: 50,
    borderBottomWidth: 0.3,
    alignSelf: 'center',
    borderBottomColor: '#DBDBDB',
    paddingLeft: 20,
    justifyContent: 'center',
  },
  txt: {
    fontSize: 16,
    color: '#000',
  },
});
