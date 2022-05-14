import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import EpisodeComponent from '../components/EpisodeComponent';
import OriginalImageComponent from '../components/OriginalImageComponent';
import ShowMoreOrLessTOComponent from '../components/ShowMoreOrLessTOComponent';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {selectDateString} from '../redux/reducers/calendarSlice';
import {
  fetchEpisodesByDateAsync,
  selectShownEpisodes,
} from '../redux/reducers/episodesSlice';
import {selectOriginalImage} from '../redux/reducers/originalImageSlice';
import {Episode} from '../redux/reducers/types/Episode';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dateContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
  dateText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
});

const Episodes: React.FC = ({}) => {
  const date = useAppSelector(selectDateString);

  const shownEpisodesData = useAppSelector(selectShownEpisodes);
  const originalImage = useAppSelector(selectOriginalImage);
  const dispatch = useAppDispatch();
  const [allEpisodesData, setAllEpisodesData] = useState<Episode[]>();

  useEffect(() => {
    dispatch(fetchEpisodesByDateAsync(date))
      .unwrap()
      .then(episodes => {
        setAllEpisodesData(episodes);
      });
  }, [date, dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>
          {moment(date).format('DD MMMM YYYY')}
        </Text>
      </View>

      {originalImage.isShowing ? <OriginalImageComponent /> : null}

      {allEpisodesData ? (
        <ScrollView>
          {shownEpisodesData.map(episode => {
            return <EpisodeComponent key={episode.id} episode={episode} />;
          })}

          <ShowMoreOrLessTOComponent />
        </ScrollView>
      ) : (
        <Text>loading...</Text>
      )}
    </View>
  );
};

export default Episodes;
