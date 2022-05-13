import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Episode} from '../redux/reducers/episodesSlice';

interface EpisodeComponentProps {
  episode: Episode;
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 120,
  },
});

const EpisodeComponent: React.FC<EpisodeComponentProps> = ({episode}) => {
  console.log(episode.show.image);

  return (
    <View>
      {episode.show.image ? (
        <Image style={styles.image} source={{uri: episode.show.image.medium}} />
      ) : null}

      <Text>{episode.show.name}</Text>
    </View>
  );
};

export default EpisodeComponent;
