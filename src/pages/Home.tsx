import React from 'react';
import {Text, View} from 'react-native';
import CalendarComponent from '../components/CalendarComponent';

const Home: React.FC = ({}) => {
  return (
    <View>
      <Text>Home</Text>
      <CalendarComponent />
    </View>
  );
};

export default Home;
