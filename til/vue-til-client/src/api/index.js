import axios from 'axios';

const httpClient = axios.create({
	baseURL: 'http://localhost:3000',
});

function signUp(form) {
	return httpClient.post('/signup', form);
}

export { signUp };
