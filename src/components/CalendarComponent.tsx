import React from 'react';
import {View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {useAppDispatch} from '../redux/hooks';
import {setDateString} from '../redux/reducers/calendarSlice';

const CalendarComponent: React.FC = ({}) => {
  const dispatch = useAppDispatch();

  return (
    <View>
      <Calendar
        onDayPress={day => {
          dispatch(setDateString(day));
        }}
      />
    </View>
  );
};

export default CalendarComponent;
