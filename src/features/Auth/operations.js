import {createAsyncThunk} from '@reduxjs/toolkit';
import * as AuthApis from 'apis/auth';
import http from 'apis/http';

export const login = createAsyncThunk(
  'auth/login',
  async (data, {rejectWithValue}) => {
    try {
      const response = await AuthApis.login(data);
      await http.setAuthorizationHeader(response?.data?.accessToken);
      return response?.data;
    } catch (err) {
      if (!err.data) {
        throw err;
      }
      return rejectWithValue(err.data);
    }
  },
);
