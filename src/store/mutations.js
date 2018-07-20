export default {
    'CHANGE_USUARIO'(state, payload){
        state.usuario = payload;
    },
    'CHANGE_TOKEN'(state, payload){
        state.token = payload;
    }
}