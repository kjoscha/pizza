import React from 'react';
import { Dimensions, TextInput, TouchableOpacity, View, ScrollView, Text, Image, Slider } from 'react-native';
import { connect } from "react-redux";

import styles from '../Styles';
import PublishScreen from './PublishScreen';
import { RESTDB_IO_KEY } from '../Secrets';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const main =
      <ScrollView contentContainerStyle={styles.container}>
        <Text>My pizza has a diameter of</Text>
        <Text style={styles.bigNumber}>{this.props.pizzaCalc.diameter}cm</Text>

        <Slider
          style={styles.slider}
          width={Dimensions.get('window').width * 0.7}
          step={1}
          minimumValue={1}
          maximumValue={100}
          onValueChange={this.props.setDiameter}
          value={this.props.pizzaCalc.diameter}
        />

        <Image source={require('../assets/pizza.png')} style={{width: this.props.pizzaCalc.diameter * 3, height: this.props.pizzaCalc.diameter * 3}} />

        <Text style={styles.priceText}>My pizza has a price of</Text>
        <Text style={styles.bigNumber}>{this.props.pizzaCalc.price}€</Text>

        <Slider
          style={styles.slider}
          width={Dimensions.get('window').width * 0.7}
          step={0.1}
          minimumValue={1}
          maximumValue={20}
          onValueChange={this.props.setPrice}
          value={this.props.pizzaCalc.price}
        />

        <View style={styles.greyBlock}>
          <Text style={styles.result}>One square meter would cost</Text>
          <Text style={styles.bigNumber}>{this.props.pizzaCalc.squaremeterPrice}€</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('List')}>
            <Text style={styles.buttonText}> Top 100 </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Publish')}>
            <Text style={styles.buttonText}> Publish </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    return (
      <View>{main}</View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pizzaCalc: state.pizzaCalc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDiameter: (diameter) => { dispatch({ type: "SET_DIAMETER", payload: diameter }) },
    setPrice: (price) => { dispatch( { type: "SET_PRICE", payload: price } ) },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
