import api from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";

// * Ruta para loguearse

export const newUser = async (pName, pLastname, pEmail, pPassword) => {

    const data = {
        name: pName,
        lastname: pLastname,
        email: pEmail,
        password: pPassword
    }

    try {
        const res = await api.post('/user/new', data);
        // console.log(res);
        return true;
    } catch (error) {
        console.error("Error API:", error.message);
        return false;
    }
}

export const login = async (pEmail, pPassword) => {

    const data = {
        email: pEmail,
        password: pPassword
    }

    try {
        const res = await api.post('/user/login', data);

        // console.log(res);
        if (res.status === 200) {
            const token = res.data.authenticated;
            const user = res.data.user;
            await AsyncStorage.setItem('@accessToken', token);
            await AsyncStorage.setItem('@user', JSON.stringify(user));
            return true;
        }
    } catch (error) {
        console.error("Error API:", error.message);
        return false;
    }
}