import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {useAppDispatch} from '../redux/hooks';
import {setDateString} from '../redux/reducers/calendarSlice';

interface CalendarProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
}

const CalendarComponent: React.FC<CalendarProps> = ({navigation}) => {
  const dispatch = useAppDispatch();

  return (
    <View>
      <Calendar
        onDayPress={day => {
          dispatch(setDateString(day));
          navigation.navigate('Episodes');
        }}
        hideDayNames={true}
      />
    </View>
  );
};

export default CalendarComponent;
