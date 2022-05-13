import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {selectDateString} from '../redux/reducers/calendarSlice';
import {fetchEpisodesByDateAsync} from '../redux/reducers/episodesSlice';

const Episodes: React.FC = ({}) => {
  const date = useAppSelector(selectDateString);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEpisodesByDateAsync(date))
      .unwrap()
      .then(episodes => {
        console.log(episodes);
      });
  }, [date, dispatch]);

  return (
    <View>
      <Text>Episodes</Text>
    </View>
  );
};

export default Episodes;
