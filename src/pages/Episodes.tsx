import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import EpisodeComponent from '../components/EpisodeComponent';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {selectDateString} from '../redux/reducers/calendarSlice';
import {
  Episode,
  fetchEpisodesByDateAsync,
} from '../redux/reducers/episodesSlice';

const Episodes: React.FC = ({}) => {
  const date = useAppSelector(selectDateString);
  const dispatch = useAppDispatch();
  const [episodesData, setEpisodesData] = useState<Episode[]>();

  useEffect(() => {
    dispatch(fetchEpisodesByDateAsync(date))
      .unwrap()
      .then(episodes => {
        console.log(episodes);
        setEpisodesData(episodes);
      });
  }, [date, dispatch]);

  return (
    <View>
      <Text>Episodes</Text>
      <ScrollView>
        {episodesData ? (
          episodesData.map(episode => {
            return <EpisodeComponent key={episode.id} episode={episode} />;
          })
        ) : (
          <Text>loading...</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Episodes;
