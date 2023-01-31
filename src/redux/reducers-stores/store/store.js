import { configureStore } from '@reduxjs/toolkit'

import {userReducer}  from '../reducers/userReducer';
import filtersReducer from '../reducers/filtersReducer';


const store = configureStore({
  reducer: {
    user: userReducer,
    filters: filtersReducer
  }
})

export default store ;
