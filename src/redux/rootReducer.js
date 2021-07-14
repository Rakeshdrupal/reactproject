import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './User/user.reducer';
import authReducer from "./Auth/auth.reducer";
import messageReducer from "./Message/message.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  auth:authReducer,
  message: messageReducer
});

const configStorage = {
  key: 'root',
  storage,
  whitelist: ['cartData']
};

export default persistReducer(configStorage, rootReducer);
