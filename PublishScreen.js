import React from 'react';
import { TextInput, TouchableOpacity, View, ScrollView, Text } from 'react-native';
import styles from './Styles';
import { RESTDB_IO_KEY } from './Secrets';

export default class PublishScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'test',
    };
  }

  postData() {
    const that = this;
    fetch('https://pizza-3a00.restdb.io/rest/vendors', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "x-apikey": RESTDB_IO_KEY,
      },
      body: JSON.stringify({
        name: this.state.name,
        diameter: 10,
        price: 12.50,
        squaremeter_price: this.props.navigation.getParam('squareCentimeterPrice')
      }),
    })
    .then(function() {
      that.props.navigation.navigate('List');
    });
  }

  render() {
    return(
      <View style={styles.container}>
        <TextInput
          autoFocus={true}
          style={styles.nameInput}
          placeholder="Name"
          onChangeText={(text) => this.setState({ name: text })}
        />

        <View style={styles.greyBlock}>
          <Text style={styles.result}>One square meter would cost</Text>
          <Text style={styles.bigNumber}>{this.props.navigation.getParam('squareCentimeterPrice')}€</Text>
        </View>

        <TouchableOpacity
          style={styles.listButton}
          onPress={this.postData.bind(this)}>
          <Text style={styles.listButtonText}> Publish </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
