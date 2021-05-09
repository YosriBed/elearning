import {
	call, put, takeLatest,   all
} from 'redux-saga/effects';

import {actions} from './slice';
import history from './utils/history';

const api = (url, method,body) => {
	// eslint-disable-next-line no-undef
	const baseApiUrl = process.env.REACT_APP_API_SERVER || 'http://localhost:8080';
	return fetch(`${baseApiUrl}${url}`,
		{
			method,
			body,
			headers: {
				'Content-Type': 'application/json',
				'access-control-allow-origin' : '*',
			}
		}).then(res => res.json())
		.then(data => (data))
		.catch(err => (err));
};
function* login({payload: {body}}){
	try {
		const response = yield call(api, '/api/auth/login','POST',JSON.stringify(body));
		yield put(actions.setUser(response.user));
		yield put(actions.setTokens(response.tokens));
		history.push('/');
	} catch (error) {
		yield put(actions.error(error));
	}
}

function* saga() {
	yield all([
		takeLatest(actions.login.type, login),
		
	]);
}
  
export default saga;
  