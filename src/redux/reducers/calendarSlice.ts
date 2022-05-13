import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DateData} from 'react-native-calendars';
import {RootState} from '../store';

export interface CalendarState {
  dateString: string;
}

const initialState: CalendarState = {
  dateString: '',
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setDateString: (state, action: PayloadAction<DateData>) => {
      state.dateString = action.payload.dateString;
    },
  },
});

export const {setDateString} = calendarSlice.actions;

export const selectDateString = (state: RootState) => state.calendar.dateString;

export default calendarSlice.reducer;
