import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

export type Episode = {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: Date;
  runtime: number;
  // rating
  //image
  show: {
    name: string;
    image: {
      medium: string;
      original: string;
    };
    premiered: string;
  };
  //_links
};

export interface EpisodesState {
  status: 'idle' | 'loading' | 'failed';
  episodes: Episode[];
}

const initialState: EpisodesState = {
  status: 'idle',
  episodes: [],
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
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchEpisodesByDateAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchEpisodesByDateAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.episodes = action.payload;
      });
  },
});

export const {} = episodesSlice.actions;

export const selectEpisodes = (state: RootState) => state.episodes.episodes;

export default episodesSlice.reducer;
