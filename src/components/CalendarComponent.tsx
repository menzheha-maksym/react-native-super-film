import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import moment from 'moment';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {useAppDispatch} from '../redux/hooks';
import {setDateString} from '../redux/reducers/calendarSlice';

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'rgb(220,220,220)',
  },
  headerMonth: {
    fontWeight: 'bold',
  },
});

interface CalendarProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
}

const CalendarComponent: React.FC<CalendarProps> = ({navigation}) => {
  const dispatch = useAppDispatch();

  return (
    <View>
      <Calendar
        headerStyle={styles.headerStyle}
        renderHeader={(date: Date) => (
          <Text style={styles.headerMonth}>{moment(date).format('MMMM')}</Text>
        )}
        arrow
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
