import {combineReducers} from '@reduxjs/toolkit';
import general from 'features/general';
import auth from 'features/auth';

export const reducers = combineReducers({
  general: general,
  auth: auth,
});
