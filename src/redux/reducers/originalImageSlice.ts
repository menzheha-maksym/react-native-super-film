import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

export interface originalImageState {
  isShowing: boolean;
  imageURL: string;
}

const initialState: originalImageState = {
  isShowing: false,
  imageURL: '',
};

export const originalImageSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    show: (state, action: PayloadAction<{show: boolean; imageURL: string}>) => {
      state.isShowing = action.payload.show;
      state.imageURL = action.payload.imageURL;
    },
  },
});

export const {show} = originalImageSlice.actions;

export const selectOriginalImage = (state: RootState) => state.originalImage;

export default originalImageSlice.reducer;
