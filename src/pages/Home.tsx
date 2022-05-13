import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import CalendarComponent from '../components/CalendarComponent';

interface HomeProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
}

const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <CalendarComponent navigation={navigation} />
    </View>
  );
};

export default Home;
