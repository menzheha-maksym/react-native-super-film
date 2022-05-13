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
        theme={{
          arrowColor: 'black',
          //@ts-ignore -- works, but typescript gets angry
          'stylesheet.calendar.main': {
            dayContainer: {
              borderColor: '#D1D3D4',
              borderWidth: 1,
              flex: 1,
              padding: 10,
              textAlign: 'center',
            },
            week: {
              marginTop: 0,
              marginBottom: 0,
              flexDirection: 'row',
              justifyContent: 'space-around',
            },
          },
        }}
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
