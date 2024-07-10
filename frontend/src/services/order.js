import api from "./api";
import { getProducts } from './product';


export const createOrder = async (data) => {

  try {
    const res = await api.put('/order/create', data)
    getProducts();
    return { success: true, data: res.data };
  } catch (error) {
    getProducts();
    // Manejar diferentes tipos de errores
    if (error.response && error.response.status === 409) {
      return { success: false, message: '¡Stock insuficiente!' };
    } else {
      return { success: false, message: 'An error occurred while fetching orders' };
    }
  }
}

export const getOrders = async (id) => {
  try {
    const res = await api.get(`/order/get/${id}`);
    return { success: true, data: res.data };
  } catch (error) {
    // Manejar diferentes tipos de errores
    if (error.response && error.response.status === 404) {
      return { success: false, message: 'No tienes pedidos' };
    } else {
      return { success: false, message: 'An error occurred while fetching orders' };
    }
  }
};