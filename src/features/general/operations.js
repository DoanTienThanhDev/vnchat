import {createAsyncThunk} from '@reduxjs/toolkit';

import {onLogin} from 'navigations';
import setI18nConfig from 'translate';

export const startUp = createAsyncThunk(
  'app/startUp',
  async (_, {rejectWithValue, getState}) => {
    try {
      await setI18nConfig('vn');
      onLogin();
    } catch (err) {
      console.log('error', err);
      return rejectWithValue(err);
    }
  },
);
