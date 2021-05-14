/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'rootReducer',
  initialState: {
    loading: false,
    error: false,
    user: null,
    users: null,
    tokens: {},
    courses: null,
    course: null,
    homepage: null,
  },
  reducers: {
    error(state, action) {
      state.error = action.payload.error;
      state.loading = false;
    },
    login() {},
    setUser(state, action) {
      state.user = action.payload;
    },
    setTokens(state, action) {
      state.tokens = action.payload;
    },
    getCourses() {},
    setCourses(state, action) {
      state.courses = action.payload;
    },
    logout() {},
    clearUserSession(state) {
      state.user = null;
      state.tokens = null;
    },
    createCourse() {},
    getCourse() {},
    setCourse(state, action) {
      state.course = action.payload;
    },
    getHomepage() {},
    setHomepage(state, action) {
      state.homepage = action.payload;
    },
    joinCourse() {},
    getMyCourses() {},
    getUsers() {},
    setUsers(state, action) {
      state.users = action.payload;
    },
    register() {},
  },
});

export const { name, actions, reducer } = appSlice;
