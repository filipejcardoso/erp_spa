import axios from 'axios'
const loginAction = async ({commit}, obj) => {
    const url = `${process.env.API_URL}/auth/login`;
    const payload = {"username":`${obj.username}`,"password":`${obj.password}`};

    try{
        const data = (await axios.post(url,payload)).data
        commit('SET_TOKEN', data.token)
        commit('SET_NOME', data.records.nome)
        commit('SET_USERNAME', data.records.username)
        return true
    } catch(e) {
        return false
    }
}

const logoutAction = async ({commit}, obj) => {
    commit('SET_TOKEN', null)
    commit('SET_NOME', null)
    commit('SET_USERNAME', null)
    return true
}

export default {
    loginAction,
    logoutAction
}