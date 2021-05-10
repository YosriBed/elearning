/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'rootReducer',
  initialState: {
    loading: false,
    error: false,
    user: null,
    tokens: {},
    courses: null,
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
    logout(){},
    clearUserSession(state){
      state.user = null;
      state.tokens = null;
    }
  },
});

export const { name, actions, reducer } = appSlice;
