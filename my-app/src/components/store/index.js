import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import cardsDataSlice from './cardsDataSlice';
import settingsSlice from './settingsSlice';

const store = configureStore({
    reducer: {
        settings: settingsSlice.reducer,
        auth: authSlice.reducer,
        cardsData: cardsDataSlice.reducer
    }
});

export default store;
