import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {
  selectEpisodes,
  selectShowingMore,
  showLess,
  showMore,
} from '../redux/reducers/episodesSlice';

const styles = StyleSheet.create({
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

const ShowMoreOrLessTOComponent: React.FC = ({}) => {
  const showingMore = useAppSelector(selectShowingMore);
  const allEpisodesData = useAppSelector(selectEpisodes);
  const dispatch = useAppDispatch();

  function handleShowMorePress() {
    dispatch(showMore());
  }

  function handleShowLessPress() {
    dispatch(showLess());
  }

  return (
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
  );
};

export default ShowMoreOrLessTOComponent;
