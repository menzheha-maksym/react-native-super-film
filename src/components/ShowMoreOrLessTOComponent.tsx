import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {
  selectEpisodes,
  selectShowingMore,
  showLess,
  showMore,
} from '../redux/reducers/episodesSlice';
import Icon from 'react-native-vector-icons/Entypo';

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
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  showMoreText: {
    textAlign: 'center',
    color: 'grey',
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
    dispatch(
      showLess(
        /**
         * (window height) - (show more button) - (episodes date) - (app header) / (episode image height with paddings)
         */
        Math.floor(Dimensions.get('window').height - 50 - 30 - 40) / 150,
      ),
    );
  }

  if (allEpisodesData.length < 4) {
    return null;
  }

  return (
    <TouchableOpacity
      style={styles.showMore}
      onPress={() =>
        showingMore ? handleShowLessPress() : handleShowMorePress()
      }>
      <Text style={styles.showMoreText}>
        {showingMore ? (
          <Text>
            Show Less {'  '}
            <Icon name="chevron-up" size={15} color="black" />
          </Text>
        ) : (
          <Text>
            Show {allEpisodesData!.length - 4} More {'  '}
            <Icon name="chevron-down" size={15} color="black" />
          </Text>
        )}
      </Text>
    </TouchableOpacity>
  );
};

export default ShowMoreOrLessTOComponent;
