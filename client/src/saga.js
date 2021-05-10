import { call, put, takeLatest, all, select } from 'redux-saga/effects';

import { actions } from './slice';
import history from './utils/history';

const accessTokenSelector = (state) => state.tokens?.access?.token;
const refreshTokenSelector = (state) => state.tokens?.refresh.token;

const api = (url, method, token, body) => {
  // eslint-disable-next-line no-undef
  const baseApiUrl =
    process.env.REACT_APP_API_SERVER || 'http://localhost:8080';

  return fetch(`${baseApiUrl}${url}`, {
    method,
    body,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'access-control-allow-origin': '*',
    },
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
};

function* login({ payload: { body } }) {
  try {
    const token = yield select(accessTokenSelector);
    const response = yield call(
      api,
      '/api/auth/login',
      'POST',
      token,
      JSON.stringify(body)
    );
    yield put(actions.setUser(response.user));
    yield put(actions.setTokens(response.tokens));
    history.push('/');
  } catch (error) {
    yield put(actions.error(error));
  }
}

function* logout() {
  try {
    const token = yield select(refreshTokenSelector);
    yield call(
      api,
      '/api/auth/logout',
      'POST',
      null,
      JSON.stringify({ refreshToken: token })
    );
    yield put(actions.clearUserSession());
    history.push('/');
  } catch (error) {
    yield put(actions.error(error));
  }
}

function* getCourses() {
  try {
    const token = yield select(accessTokenSelector);
    console.log(token);
    const response = yield call(api, '/api/courses', 'GET', token);
    yield put(actions.setCourses(response));
  } catch (error) {
    yield put(actions.error(error));
  }
}

function* saga() {
  yield all([
    takeLatest(actions.login.type, login),
    takeLatest(actions.logout.type, logout),
    takeLatest(actions.getCourses.type, getCourses),
  ]);
}

export default saga;
