// module to store articles data

import ArticlesService from '../../../services/ArticlesServices';
import Constants from '../constants';

const state = {
	news: {
		// articles: [],
		articlesPagination: [],
		currentPage: 0,
		showLoader: false,
	},
};

const getters = {
	// getArticlesInitial(state) {
	// 	return state.news.articles;
	// },
	getArticlesPagination: (state) => {
		return state.news.articlesPagination;
	},
	getLoaderStatus: (state) => {
		return state.news.showLoader;
	},
	getCurrenPage: (state) => {
		return state.news.currentPage;
	},
};

const actions = {
	LOAD_ARTICLES_PAGINATION({ commit }, payload) {
		commit('SET_LOADER_STATUS', true);
		return new Promise((resolve, reject) => {
			ArticlesService.getArticles(payload)
				.then((response) => {
					resolve(response);
					commit(Constants.MUTATIONS.SET_ARTICLES_PAGINATION, response);
					commit('SET_LOADER_STATUS', false);
				})
				.catch((error) => {
					reject(error);
					console.log(error);
				});
		});
	},
};

const mutations = {
	SET_ARTICLES_PAGINATION(state, payload) {
		state.news.articlesPagination.push(...payload);
	},

	SET_LOADER_STATUS(state, newState) {
		state.news.showLoader = newState;
	},

	SET_CURRENT_PAGE(state, payload) {
		state.news.currentPage = payload;
	},
};

export const articleStore = {
	state,
	getters,
	actions,
	mutations,
};
