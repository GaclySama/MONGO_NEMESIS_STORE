import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../common/Header';
import {useNavigation} from '@react-navigation/native';
import {
  addItemToCart,
  reduceItemFromCart,
  removeItemFromCart,
} from '../redux/slices/CartSlice';
import CheckoutLayout from '../common/CheckoutLayout';

const Cart = () => {
  const items = useSelector(state => state.cart);
  const [cartItems, setCartItems] = useState([]);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    setCartItems(items.data);
  }, [items]);

  const getTotal = () => {
    let total = 0;
    cartItems.map(item => {
      total = total + item.qty * item.price;
    });
    return total.toFixed(0);
  };

  return (
    <View style={styles.container}>
      <Header
        title={'Carrito de Compra'}
        leftIcon={require('../images/back.png')}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />
      <FlatList
        data={cartItems}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.productItem}
              >
              <Image source={{ uri: item.imagen }} style={styles.itemImage} />
              <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                <View style={{flex: 0.55}}>
                  <Text style={styles.name}>
                    {item.title.length > 25
                      ? item.title.substring(0, 25) + '...'
                      : item.title}
                  </Text>
                  <Text style={styles.price}>{'$' + item.price}</Text>
                </View>
                <View style={styles.qtyview}>
                <Text style={styles.qty}>Cantidad: {item.qty}</Text>
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                      
                        dispatch(removeItemFromCart(index));
                     
                    }}
                  >
                    <Text style={{ color:'white', fontSize: 20, fontWeight: '800'}}>X</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      {cartItems.length < 1 && (
        <View style={styles.noItems}>
          <Text style={{fontSize:20}}>No hay productos</Text>
        </View>
      )}
      {cartItems.length > 0 && (
        <CheckoutLayout items={cartItems.length} total={getTotal()} />
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productItem: {
    width: Dimensions.get('window').width,
    height: 70,
    marginTop: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  itemImage: {
    width: 50,
    height: 60,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  price: {
    color: 'green',
    fontSize: 18,
    fontWeight: '600',
  },
  qtyview: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.45,
    justifyContent: 'flex-end',
  },
  btn: {
    padding: 5,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 10,
    backgroundColor:'red'
  },
  qty: {
    marginHorizontal: 10,
    fontSize: 18,
  },
  noItems: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
