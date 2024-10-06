import { configureStore } from '@reduxjs/toolkit';
import userSlide from './slides/usersSlide';
import loginSlice from './slides/loginSilde';

const store = configureStore({
    reducer: {
        usersReducer: userSlide,
        loginReducer: loginSlice,
    },
});

export default store;
