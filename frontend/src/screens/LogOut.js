import AsyncStorage from '@react-native-async-storage/async-storage';

export const logout = () => {
  try {
    const keys = ['@accessToken', '@user', '@products']
    AsyncStorage.multiRemove(keys);

    return "";
  } catch (error) {
    console.error('Failed to logout:', error);
  }
};