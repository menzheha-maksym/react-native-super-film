import React from 'react';
import {View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {useAppDispatch} from '../redux/hooks';
import {setDateString} from '../redux/reducers/calendarSlice';
import {fetchEpisodesByDateAsync} from '../redux/reducers/episodesSlice';

const CalendarComponent: React.FC = ({}) => {
  const dispatch = useAppDispatch();

  return (
    <View>
      <Calendar
        onDayPress={day => {
          // dispatch(setDateString(day));
          dispatch(fetchEpisodesByDateAsync(day.dateString));
        }}
      />
    </View>
  );
};

export default CalendarComponent;
