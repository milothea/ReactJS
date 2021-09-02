import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    admin: {
        username: 'testAdmin@gmail.com',
        password: '12345yuiopp'
    },
    user: {}
};

const authSlice = createSlice({
    name: 'authentification',
    initialState,
    reducers: {
        logIn(state, action) {
            const user = action.payload;

            state.isLoggedIn = true;
            state.user = user;

            if (user.username === state.admin.username &&
            user.password === state.admin.password) {
                state.user.isAdmin = true;
            } else {
                state.user.isAdmin = false;
            }
        },
        logOut(state) {
            state.isLoggedIn = false;
            state.user = {};
        },
    }
});

export const authActions = authSlice.actions;

export default authSlice;
