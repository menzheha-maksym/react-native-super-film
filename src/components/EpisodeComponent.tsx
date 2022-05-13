import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Episode} from '../redux/reducers/episodesSlice';

interface EpisodeComponentProps {
  episode: Episode;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 25,
    paddingRight: 25,
  },
  image: {
    width: 80,
    height: 120,
    borderRadius: 5,
  },
  detailsContainer: {
    paddingLeft: 20,
    justifyContent: 'space-between',
  },
  name: {
    color: 'black',
  },
  year: {
    color: 'grey',
  },
  seasonAndEpisode: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    backgroundColor: 'rgb(220,220,220)',
    width: 190,
  },
});

const EpisodeComponent: React.FC<EpisodeComponentProps> = ({episode}) => {
  return (
    <View style={styles.container}>
      <View>
        {episode.show.image ? (
          <Image
            style={styles.image}
            source={{uri: episode.show.image.medium}}
          />
        ) : null}
      </View>

      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.name}>{episode.show.name}</Text>
          <Text style={styles.year}>
            {episode.show.premiered.split('-')[0]}
          </Text>
        </View>

        <View style={styles.seasonAndEpisode}>
          <Text>
            Season: {episode.season} Episode: {episode.number}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default EpisodeComponent;
