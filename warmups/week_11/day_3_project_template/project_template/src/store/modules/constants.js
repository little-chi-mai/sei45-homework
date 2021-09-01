// File to store all static strings

// Action Constants

const LOAD_ARTICLES_LIST = 'GET_ARTICLES_LIST';
const LOAD_ARTICLES_PAGINATION = 'LOAD_ARTICLES_PAGINATION';
const LOAD_KEYWORDS = 'GET_KEYWORDS';

// Mutation Constants

const SET_ARTICLES_LIST = 'SET_ARTICLES_LIST';
const SET_ARTICLES_PAGINATION = 'SET_ARTICLES_PAGINATION';
const SET_LOADER_STATUS = 'SET_LOADER_STATUS';
const SET_IS_ERROR = 'SET_IS_ERROR';
const SET_KEYWORDS = 'SET_KEYWORDS';

// Miscellaneous Constants

const TITLE_ABOUT = 'Streem News';
const PARAGRAPH_ABOUT = 'This is a SPA using vuejs for Streem code challenge.';
const HOME_LINK = 'Home';
const ABOUT_LINK = 'About';
const READ_MORE = 'read more';
const READ_LESS = 'read less';
const WORD_COUNT = 'word count';
const HOME_TITLE = 'news';
const MY_TEXT =
	"I  wrote this application thinking more in terms of a good architecture for front end, rather than the visual aspect of it My rationale behind resides on the SEO concept of 'big words get more clicks' that's why I choose the aesthetic you see. If I had more time I will use Postcss for all so I can let scss behind and make my own on css.I will also add animations and implement my error (store which I have the logic down already). I tried to show all the benefits of a good structure, but you guys can decided at the end!.I enjoyed the challenge.Thanks.Misael M.";

export default {
	ACTIONS: {
		LOAD_ARTICLES_LIST,
		LOAD_ARTICLES_PAGINATION,
		LOAD_KEYWORDS,
	},
	MUTATIONS: {
		SET_ARTICLES_LIST,
		SET_ARTICLES_PAGINATION,
		SET_LOADER_STATUS,
		SET_IS_ERROR,
		SET_KEYWORDS,
	},
	TEXT: {
		TITLE_ABOUT,
		PARAGRAPH_ABOUT,
		HOME_LINK,
		ABOUT_LINK,
		READ_MORE,
		READ_LESS,
		WORD_COUNT,
		HOME_TITLE,
		MY_TEXT,
	},
};
