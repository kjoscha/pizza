import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';

const Vendor = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <Text style={styles.listItemName}> {item.name} </Text>
        <Text style={styles.listItemNumber}> {item.diameter}cm </Text>
        <Text style={styles.listItemNumber}> {item.price.toFixed(2)}€ </Text>
        <Text style={styles.listItemSquaremeterPrice}> {item.squaremeter_price}€/m² </Text>
      </View>
    )
}

export default Vendor;
