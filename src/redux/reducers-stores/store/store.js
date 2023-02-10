import { configureStore } from '@reduxjs/toolkit';
import {userReducer}  from '../reducers/userReducer';
import filtersReducer from '../reducers/filtersReducer';
import CartReducer from '../reducers/cartReducer';
import {persistStore, persistReducer} from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session'
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { combineReducers } from '@reduxjs/toolkit';
import directoryReducer from '../reducers/directory-reducer';
import shopReducer from '../reducers/shop-reducer';



const persistConfig ={
  key: 'root',
  storage,
};


const userPersistConfig = {
  key: 'user',
  storage: sessionStorage,
}

const rootReducer = combineReducers({ 
 /* user: userReducer,*/ user: persistReducer(userPersistConfig, userReducer),
  filters: filtersReducer,
  cart: CartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);



const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
  
});


export const persistor = persistStore(store);

export default store ;

