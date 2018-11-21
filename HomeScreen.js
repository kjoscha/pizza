import React from 'react';
import { Dimensions, TextInput, TouchableOpacity, View, ScrollView, Text, Image, Slider } from 'react-native';
import styles from './Styles';
import { RESTDB_IO_KEY } from './Secrets';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 5,
      diameter: 26,
      text: null,
      showNamePrompt: false
    };
  }

  changeDiameter(diameter) {
    this.setState(() => {
      return {
        diameter: parseFloat(diameter),
      };
    });
  }

  changePrice(price) {
    this.setState(() => {
      return {
        price: parseFloat(price) >= 10 ? parseFloat(price).toPrecision(4) : parseFloat(price).toPrecision(3),
      };
    });
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
        price: this.state.price,
        showNamePrompt: false,
      }),
    })
    .then(function() {
      that.setState({showNamePrompt: false});
      that.props.navigation.navigate('List');
    });
  }

  squareCentimeterPrice() {
    const radius = (this.state.diameter / 2)
    const area = 3.14 * radius * radius
    return Math.round(this.state.price / area * 10000) //price for one square meter
  }

  render() {
    const main = this.state.showNamePrompt ?
      <View>
        <TextInput
          style={{height: 40}}
          placeholder="Name"
          onChangeText={(text) => this.setState({name: text})}
        />
        <TouchableOpacity
          style={styles.listButton}
          onPress={() => this.postData()}>
          <Text style={styles.listButtonText}> Publish </Text>
        </TouchableOpacity>
      </View>
      :
      <ScrollView contentContainerStyle={styles.container}>
        <Text>My pizza has a diameter of</Text>
        <Text style={styles.bigNumber}>{this.state.diameter}cm</Text>

        <Slider
          style={styles.slider}
          width={Dimensions.get('window').width * 0.7}
          step={1}
          minimumValue={1}
          maximumValue={100}
          onValueChange={this.changeDiameter.bind(this)}
          value={this.state.diameter}
        />

        <Image source={require('./assets/pizza.png')} style={{width: this.state.diameter * 3, height: this.state.diameter * 3}} />

        <Text style={styles.priceText}>My pizza has a price of</Text>
        <Text style={styles.bigNumber}>{this.state.price}€</Text>

        <Slider
          style={styles.slider}
          width={Dimensions.get('window').width * 0.7}
          step={0.1}
          minimumValue={1}
          maximumValue={20}
          onValueChange={this.changePrice.bind(this)}
          value={this.state.price}
        />

        <View style={styles.greyBlock}>
          <Text style={styles.result}>One square meter would cost</Text>
          <Text style={styles.bigNumber}>{this.squareCentimeterPrice()}€</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.listButton}
            onPress={() => this.props.navigation.navigate('List')}>
            <Text style={styles.listButtonText}> Compare </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.listButton}
            onPress={() => this.setState({showNamePrompt: true})}>
            <Text style={styles.listButtonText}> Publish </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    return (
      <View>{main}</View>
    );
  }
}
