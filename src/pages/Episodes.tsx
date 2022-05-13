import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import EpisodeComponent from '../components/EpisodeComponent';
import OriginalImageComponent from '../components/OriginalImageComponent';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {selectDateString} from '../redux/reducers/calendarSlice';
import {
  fetchEpisodesByDateAsync,
  selectShowingMore,
  selectShownEpisodes,
  showLess,
  showMore,
} from '../redux/reducers/episodesSlice';
import {selectOriginalImage} from '../redux/reducers/originalImageSlice';
import {Episode} from '../redux/reducers/types/Episode';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 1.15,
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
  },
  showMore: {
    width: '90%',

    flexDirection: 'row',
    justifyContent: 'center',

    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  showMoreText: {
    textAlign: 'center',
  },
});

const Episodes: React.FC = ({}) => {
  const date = useAppSelector(selectDateString);
  const showingMore = useAppSelector(selectShowingMore);
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

  function handleShowMorePress() {
    dispatch(showMore());
  }

  function handleShowLessPress() {
    dispatch(showLess());
  }

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>
          {moment(date).format('DD MMM YYYY')}
        </Text>
      </View>

      {originalImage.isShowing ? <OriginalImageComponent /> : null}

      {allEpisodesData ? (
        <ScrollView>
          {shownEpisodesData.map(episode => {
            return <EpisodeComponent key={episode.id} episode={episode} />;
          })}

          <TouchableOpacity
            style={styles.showMore}
            onPress={() =>
              showingMore ? handleShowLessPress() : handleShowMorePress()
            }>
            <Text style={styles.showMoreText}>
              {showingMore ? (
                <Text>Show Less</Text>
              ) : (
                <Text>Show {allEpisodesData!.length} More</Text>
              )}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <Text>loading...</Text>
      )}
    </View>
  );
};

export default Episodes;
