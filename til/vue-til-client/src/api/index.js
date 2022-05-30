import axios from 'axios';

const httpClient = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
});

function signUp(form) {
	return httpClient.post('/signup', form);
}

function login(form) {
	return httpClient.post('/login', form);
}

export { signUp, login };
