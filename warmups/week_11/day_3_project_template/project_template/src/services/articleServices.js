// articleServices
//  get all the news data from api
import MainService from './MainService';

const url = 'articles';

export default {
	getArticles(page, pageSize) {
		return MainService.get(url, page, pageSize);
	},
	postArticles(id) {
		return MainService.post(url, id);
	},
};
