import axios from 'axios'
const setToken = async ({commit}, obj) => {
    const url = `${process.env.API_URL}/auth/login`;
    const payload = {"username":"admin","password":"admin"};

    const data = (await axios.post(url,payload)).data
    commit('SET_TOKEN', data)
}

export default {
    setToken
}