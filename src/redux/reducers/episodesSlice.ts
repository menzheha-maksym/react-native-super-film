import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {Episode} from './types/Episode';

export interface EpisodesState {
  status: 'idle' | 'loading' | 'failed';
  episodes: Episode[];
  shownEpisodes: Episode[];
  showingMore: boolean;
  lessEpisodesQuantity: number;
}

const initialState: EpisodesState = {
  status: 'idle',
  episodes: [],
  shownEpisodes: [],
  showingMore: false,
  lessEpisodesQuantity: 0,
};

export const fetchEpisodesByDateAsync = createAsyncThunk(
  'episodes/fetchEpisodesByDate',
  async (date: string): Promise<Episode[]> => {
    const response = await fetch(
      `https://api.tvmaze.com/schedule?country=US&date=${date}`,
    );

    return response.json();
  },
);

export const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {
    showMore: state => {
      state.shownEpisodes = state.episodes;
      state.showingMore = true;
    },
    /**
     * first page with episodes list loads
     * pass 'showLessWithPayload'(payload: quantity to show (calculated dimesions))
     * then click 'show more'
     * then when click 'show less' thats no need to pass payload because dimentions does not change
     * (disable screen rotation?)
     */
    showLess: state => {
      state.shownEpisodes = state.episodes.slice(0, state.lessEpisodesQuantity);
      state.showingMore = false;
    },
    /**
     * payload: quantity to show
     */
    showLessWithPayload: (state, action: PayloadAction<number>) => {
      state.shownEpisodes = state.episodes.slice(0, action.payload);
      state.lessEpisodesQuantity = action.payload;
      state.showingMore = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchEpisodesByDateAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchEpisodesByDateAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.episodes = action.payload;
        state.showingMore = false;
      });
  },
});

export const {showMore, showLess, showLessWithPayload} = episodesSlice.actions;

export const selectEpisodes = (state: RootState) => state.episodes.episodes;
export const selectShownEpisodes = (state: RootState) =>
  state.episodes.shownEpisodes;
export const selectShowingMore = (state: RootState) =>
  state.episodes.showingMore;
export const selectLessEpisodesQuantity = (state: RootState) =>
  state.episodes.lessEpisodesQuantity;

export default episodesSlice.reducer;
