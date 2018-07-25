import state from "./state";

const SET_LIST_PRODUTOS = (state, obj) => {
    state.list_produtos = obj.records
}
export default {
    SET_LIST_PRODUTOS
}