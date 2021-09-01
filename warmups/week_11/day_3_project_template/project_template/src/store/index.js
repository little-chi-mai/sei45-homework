import Vue from 'vue';
import Vuex from 'vuex';
import VueMoment from 'vue-moment';

// import modules

// import { errorStateStore } from './modules/errorState_store/store';
import { articleStore } from './modules/articlesStore/store';

Vue.use(Vuex);
Vue.use(VueMoment);

export const store = new Vuex.Store({
	modules: {
		articleStore,
	},
});
