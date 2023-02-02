import { configureStore } from '@reduxjs/toolkit'

import {userReducer}  from '../reducers/userReducer';
import filtersReducer from '../reducers/filtersReducer';

import CartReducer from '../reducers/cartReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    filters: filtersReducer,
    cart: CartReducer
  }
})

export default store ;
