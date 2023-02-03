import { configureStore } from '@reduxjs/toolkit';
import {userReducer}  from '../reducers/userReducer';
import filtersReducer from '../reducers/filtersReducer';
import CartReducer from '../reducers/cartReducer';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { combineReducers } from '@reduxjs/toolkit';



const persistConfig ={
  key: 'root',
  storage,
}

const rootReducer = combineReducers({ 
  user: userReducer,
  filters: filtersReducer,
  cart: CartReducer,

})

const persistedReducer = persistReducer(persistConfig, rootReducer);



const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
  
})


export const persistor = persistStore(store);

export default store ;

