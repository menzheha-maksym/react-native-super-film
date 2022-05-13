import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import EpisodeComponent from '../components/EpisodeComponent';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {selectDateString} from '../redux/reducers/calendarSlice';
import {
  Episode,
  fetchEpisodesByDateAsync,
} from '../redux/reducers/episodesSlice';

const styles = StyleSheet.create({
  dateContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
  dateText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

const Episodes: React.FC = ({}) => {
  const date = useAppSelector(selectDateString);
  const dispatch = useAppDispatch();
  const [episodesData, setEpisodesData] = useState<Episode[]>();

  useEffect(() => {
    dispatch(fetchEpisodesByDateAsync(date))
      .unwrap()
      .then(episodes => {
        setEpisodesData(episodes);
      });
  }, [date, dispatch]);

  return (
    <View>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>
          {moment(date).format('DD MMM YYYY')}
        </Text>
      </View>
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
