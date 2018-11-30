import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';

const Vendor = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <View style={styles.listItemRow}>
            <Text style={styles.listItemName}> {item.name} </Text>
            <Text style={styles.listItemNumber}> {item.diameter}cm </Text>
            <Text style={styles.listItemNumber}> {item.price}€ </Text>
            <Text style={styles.listItemSquaremeterPrice}> {item.squaremeter_price}€/m² </Text>
        </View>
        <View style={styles.listItemRow}>
          <Text style={styles.listItemDescription}> {item.description} </Text>
        </View>
      </View>
    )
}

export default Vendor;
