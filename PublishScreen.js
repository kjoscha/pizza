import React from 'react';
import { TextInput, TouchableOpacity, View, ScrollView, Text } from 'react-native';
import styles from './Styles';
import { RESTDB_IO_KEY } from './Secrets';

export default class PublishScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      description: null,
      diameter: this.props.navigation.getParam('diameter'),
      price: this.props.navigation.getParam('price'),
      squaremeterPrice: this.props.navigation.getParam('squaremeterPrice'),
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
        description: this.state.description,
        diameter: this.state.diameter,
        price: this.state.price,
        squaremeter_price: this.state.squaremeterPrice,
      }),
    })
    .then(function() {
      that.props.navigation.navigate('List');
    });
  }

  render() {
    const publishButton = (
      this.state.name && this.state.name.length >= 3 &&
      this.state.description && this.state.description.length >= 8
    )
    ?
      <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.postData.bind(this)}>
            <Text style={styles.buttonText}> Publish </Text>
          </TouchableOpacity>
        </View>
      : null;

    return(
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.greyBlock}>
          <Text style={styles.result}>{ `A ${this.state.diameter}cm pizza for ${this.state.price}€...` }</Text>
          <Text style={styles.result}>One square meter would cost</Text>
          <Text style={styles.bigNumber}>{this.state.squaremeterPrice}€</Text>
        </View>

        <TextInput
          autoFocus={true}
          multiline={true}
          style={styles.input}
          placeholder="What's the name?"
          onChangeText={(text) => this.setState({ name: text })}
        />

        <TextInput
          multiline={true}
          style={styles.input}
          placeholder="Where is it located?"
          onChangeText={(text) => this.setState({ description: text })}
        />

        {publishButton}
      </ScrollView>
    )
  }
}
