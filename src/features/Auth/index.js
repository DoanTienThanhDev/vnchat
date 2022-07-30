import {createSlice} from '@reduxjs/toolkit';
import * as operations from './operations';

const initialState = {
  user: null,
  access_token: null,
  loading: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [operations.login.pending]: state => {
      state.loading = true;
    },
    [operations.login.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.user = payload;
      state.access_token = payload.accessToken;
    },
    [operations.login.rejected]: state => {
      state.loading = false;
    },
  },
});

export const {actions, reducer} = authSlice;
export default reducer;
