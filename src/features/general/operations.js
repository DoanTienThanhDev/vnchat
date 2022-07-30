import {createAsyncThunk} from '@reduxjs/toolkit';

import {onLogin, onMainContent} from 'navigations';
import setI18nConfig from 'translate';
import {iconsLoaded} from 'utils/icon';

export const startUp = createAsyncThunk(
  'app/startUp',
  async (_, {rejectWithValue, getState}) => {
    try {
      await iconsLoaded;
      await setI18nConfig('vn');
      onMainContent();
    } catch (err) {
      console.log('error', err);
      return rejectWithValue(err);
    }
  },
);
