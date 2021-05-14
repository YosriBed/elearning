import { call, put, takeLatest, all, select } from 'redux-saga/effects';

import { actions } from './slice';
import { jsonToFormData } from './utils/helpers';
import history from './utils/history';

const accessTokenSelector = (state) => state.tokens?.access?.token;
const refreshTokenSelector = (state) => state.tokens?.refresh.token;

const api = (
  url,
  method,
  token,
  body,
  headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
    'access-control-allow-origin': '*',
  }
) => {
  const baseApiUrl =
    process.env.REACT_APP_API_SERVER || 'http://localhost:8080';

  return fetch(`${baseApiUrl}${url}`, {
    method,
    body,
    headers,
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

function* register({ payload: { body } }) {
  try {
    const token = yield select(accessTokenSelector);
    const response = yield call(
      api,
      '/api/auth/register',
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
    const response = yield call(api, '/api/courses', 'GET', token);
    yield put(actions.setCourses(response));
  } catch (error) {
    yield put(actions.error(error));
  }
}

function* createCourse({ payload: { body } }) {
  try {
    const token = yield select(accessTokenSelector);
    const data = jsonToFormData(body);
    const response = yield call(api, '/api/courses', 'POST', token, data, {
      Authorization: `Bearer ${token}`,
      'access-control-allow-origin': '*',
    });
    history.push(`/courses/overview/${response.slug}`);
  } catch (error) {
    yield put(actions.error(error));
  }
}

function* getCourse({ payload: { slug } }) {
  try {
    const token = yield select(accessTokenSelector);
    const response = yield call(api, `/api/courses/${slug}`, 'GET', token);
    yield put(actions.setCourse(response));
  } catch (error) {
    yield put(actions.error(error));
  }
}

function* getHomepage() {
  try {
    const token = yield select(accessTokenSelector);
    const response = yield call(api, '/api/home', 'GET', token);
    yield put(actions.setHomepage(response));
  } catch (error) {
    yield put(actions.error(error));
  }
}

function* joinCourse({ payload: { slug } }) {
  try {
    const token = yield select(accessTokenSelector);
    const response = yield call(api, `/api/courses/join/${slug}`, 'GET', token);
    yield put(actions.setCourse(response));
  } catch (error) {
    yield put(actions.error(error));
  }
}

function* getUsers({ payload }) {
  try {
    const token = yield select(accessTokenSelector);
    Object.keys(payload).forEach(
      (k) => !payload[k] && payload[k] !== undefined && delete payload[k]
    );
    const query = new URLSearchParams(payload).toString();
    const response = yield call(api, `/api/users?${query}`, 'GET', token);
    yield put(actions.setUsers(response));
  } catch (error) {
    yield put(actions.error(error));
  }
}

function* saga() {
  yield all([
    takeLatest(actions.login.type, login),
    takeLatest(actions.register.type, register),
    takeLatest(actions.logout.type, logout),
    takeLatest(actions.getCourses.type, getCourses),
    takeLatest(actions.createCourse.type, createCourse),
    takeLatest(actions.getCourse.type, getCourse),
    takeLatest(actions.getHomepage.type, getHomepage),
    takeLatest(actions.joinCourse.type, joinCourse),
    takeLatest(actions.getUsers.type, getUsers),
  ]);
}

export default saga;
