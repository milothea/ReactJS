import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isReadOnly: false,
    appPaths: {
        mainPage: '/',
        errorPage: '/error',
        authPage: '/authentification',
        settings: '/settings'
    }
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        toggleReadMode(state) {
            state.isReadOnly = !state.isReadOnly;
        }
    }
});

export const settingsActions = settingsSlice.actions;

export default settingsSlice;
