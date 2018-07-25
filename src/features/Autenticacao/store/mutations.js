import state from "./state";

const SET_TOKEN = (state, data) => {
    state.token = data
}
const SET_NOME = (state, data) => {
    state.nome = data
}
const SET_USERNAME = (state, data) => {
    state.username = data
}
export default {
    SET_TOKEN,
    SET_NOME,
    SET_USERNAME
}