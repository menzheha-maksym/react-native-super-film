import React from 'react';
import {Text, View} from 'react-native';
import {Episode} from '../redux/reducers/episodesSlice';

interface EpisodeComponentProps {
  episode: Episode;
}

const EpisodeComponent: React.FC<EpisodeComponentProps> = ({episode}) => {
  return (
    <View>
      <Text>{episode.show.name}</Text>
    </View>
  );
};

export default EpisodeComponent;
