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
    color: 'black',
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
        renderHeader={(date: any) => (
          <Text style={styles.headerMonth}>
            {moment(date.toISOString()).format('MMMM')}
          </Text>
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
              alignItems: 'center',
            },
            week: {
              marginTop: 0,
              marginBottom: 0,
              flexDirection: 'row',
              justifyContent: 'space-around',
            },
          },
          'stylesheet.day.basic': {
            today: {
              borderColor: 'red',
              borderWidth: 1,
              borderRadius: 16,
            },
            todayText: {
              color: 'black',
              fontWeight: 'bold',
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
