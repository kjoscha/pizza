import React from 'react';
import { Dimensions, TextInput, TouchableOpacity, View, ScrollView, Text, Image, Slider } from 'react-native';
import styles from './Styles';
import PublishScreen from './PublishScreen';
import { RESTDB_IO_KEY } from './Secrets';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let [diameter, price] = [25, 5.00];
    this.setState({ diameter: diameter, price: price });
    this.calculateSquaremeterPrice(diameter, price);
  }

  changeDiameter(_diameter) {
    let diameter = parseFloat(_diameter);
    this.setState({ diameter: diameter });
    this.calculateSquaremeterPrice(diameter, this.state.price);
  }

  changePrice(_price) {
    let price = parseFloat(_price).toFixed(2);
    this.setState({ price: price })
    this.calculateSquaremeterPrice(this.state.diameter, price);
  }

  calculateSquaremeterPrice(diameter, price) {
    const radius = (diameter / 2)
    const area = 3.14 * radius * radius
    const result = Math.round(price / area * 10000) //price for one square meter
    this.setState({ squaremeterPrice: result })
  }

  render() {
    const main =
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
          <Text style={styles.bigNumber}>{this.state.squaremeterPrice}€</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('List')}>
            <Text style={styles.buttonText}> Top 100 </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Publish', {
              price: this.state.price,
              diameter: this.state.diameter,
              squaremeterPrice: this.state.squaremeterPrice},
            )}
          >
            <Text style={styles.buttonText}> Publish </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    return (
      <View>{main}</View>
    );
  }
}
