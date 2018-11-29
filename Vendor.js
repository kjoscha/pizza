import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';

const Vendor = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <Text style={styles.listItemCell}> {item.name} </Text>
        <Text style={styles.listItemCell}> {item.price} </Text>
      </View>
    )
}

export default Vendor;
