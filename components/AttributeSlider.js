import React from 'react';
import { Dimensions, View, Text, Slider } from 'react-native';
import styles from '../Styles';

const AttributeSlider = ({ text, value, setterFunction }) => {
    return (
      <View>
        <Text>{`${text}: ${value}`}</Text>

        <Slider
          style={styles.slider}
          width={Dimensions.get('window').width * 0.7}
          step={1}
          minimumValue={1}
          maximumValue={10}
          onValueChange={setterFunction}
          value={value}
        />
      </View>
    )
}

export default AttributeSlider;
