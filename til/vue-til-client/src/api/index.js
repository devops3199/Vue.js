import axios from 'axios';

const httpClient = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
});

httpClient.interceptors.request.use(
	config => {
		if (localStorage.getItem('token')) {
			config.headers['Authorization'] = localStorage.getItem('token');
		}

		return config;
	},
	error => {
		return Promise.reject(error);
	},
);

function signUp(form) {
	return httpClient.post('/signup', form);
}

function login(form) {
	return httpClient.post('/login', form);
}

function fetchPosts() {
	return httpClient.get('/posts');
}

export { signUp, login, fetchPosts };
