import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import CalendarComponent from '../components/CalendarComponent';

//@ts-ignore
import TVImage from '../../images/TV.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  tvImageAndTextContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tvImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tvImage: {
    width: 200,
    height: 150,
  },
  textUnderTvContainer: {
    marginTop: 20,
    width: 300,
  },
  textUnderTv: {
    textAlign: 'center',
  },
});

interface HomeProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
}

const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>{/*used to verticaly center tv and text container*/}</View>
      <View style={styles.tvImageAndTextContainer}>
        <View style={styles.tvImageContainer}>
          <Image style={styles.tvImage} source={TVImage} />
        </View>
        <View style={styles.textUnderTvContainer}>
          <Text style={styles.textUnderTv}>
            To get a list of series, please select the desired month and day
          </Text>
        </View>
      </View>

      <View>
        <CalendarComponent navigation={navigation} />
      </View>
    </View>
  );
};

export default Home;
