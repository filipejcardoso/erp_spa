import state from "./state";

const SET_TOKEN = (state, obj) => {
    state.nome = obj.records.nome
    state.username = obj.records.username
    state.token = obj.token
}
export default {
    SET_TOKEN
}