import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {selectOriginalImage, show} from '../redux/reducers/originalImageSlice';

const styles = StyleSheet.create({
  originalImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  originalImage: {
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 1.3,
    borderRadius: 10,
  },
});

const OriginalImageComponent: React.FC = ({}) => {
  const originalImage = useAppSelector(selectOriginalImage);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.originalImageContainer}>
      <TouchableOpacity
        onPress={() => dispatch(show({show: false, imageURL: ''}))}>
        <Image
          style={styles.originalImage}
          source={{uri: originalImage.imageURL}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default OriginalImageComponent;
