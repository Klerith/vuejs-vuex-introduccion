
import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const counterStore = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}



export default counterStore