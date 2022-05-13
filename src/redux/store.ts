import {configureStore} from '@reduxjs/toolkit';
import calendarReducer from './reducers/calendarSlice';
import episodesReducer from './reducers/episodesSlice';
import originalImageReducer from './reducers/originalImageSlice';

const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    episodes: episodesReducer,
    originalImage: originalImageReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
