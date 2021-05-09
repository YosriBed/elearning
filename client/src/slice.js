/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
	name: 'rootReducer',
	initialState: {
		loading: false,
		error: false,
		user : null,
		tokens: {}
	},
	reducers: {
		error(state, action) {
			state.error = action.payload.error;
			state.loading = false;
		},
		login(){},
		setUser(state,action){
			state.user = action.payload;
		},
		setTokens(state,action){
			state.tokens = action.payload;
		}
	},
});

export const { name, actions, reducer } = appSlice;
