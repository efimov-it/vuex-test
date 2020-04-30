import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import actions from './actions';
import getters from './getters';
import state from './state';
import mutations from './mutations';
import modules from './modules/';

export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations,
    modules
});