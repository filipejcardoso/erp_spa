import axios from 'axios'
import store from '@/store'

const setListProdutos = async ({commit}, obj) => {
    const url = `${process.env.API_URL}/produtos`;
    const header = {Authorization:`Bearer ${store.state.Autenticacao.token}`}

    try{
        const data = (await axios.get(url,{ headers: header })).data
        commit('SET_LIST_PRODUTOS', data)
        return true
    } catch(e) {
        return false
    }
}

export default {
    setListProdutos
}