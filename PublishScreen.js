import React from 'react';
import { TextInput, TouchableOpacity, View, ScrollView, Text } from 'react-native';
import styles from './Styles';
import { RESTDB_IO_KEY } from './Secrets';

export default class PublishScreen extends React.Component {
  render() {
    return(
      <View>
        <TextInput
          style={styles.nameInput}
          placeholder="Name"
          onChangeText={(text) => this.props.changeName(text)}
        />

        <Text>{this.props.price}</Text>

        <TouchableOpacity
          style={styles.listButton}
          onPress={this.props.postData}>
          <Text style={styles.listButtonText}> Publish </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
