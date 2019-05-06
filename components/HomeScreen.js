import React from 'react';
import { Dimensions, TextInput, TouchableOpacity, View, ScrollView, Text, Image, Slider, CheckBox, ImageBackground } from 'react-native';
import { connect } from "react-redux";

import styles from '../Styles';
import PublishScreen from './PublishScreen';
import AttributeSlider from './AttributeSlider';
import { RESTDB_IO_KEY } from '../Secrets';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const main =
      <ImageBackground source={require('../assets/fries.jpg')} style={{width: '100%', height: '100%'}}>
        <ScrollView contentContainerStyle={styles.container}>

          <AttributeSlider text={'Frittengeschmack'} value={this.props.attributes.taste_fries} setterFunction={this.props.setTasteFries} />
          <AttributeSlider text={'Saucengeschmack'} value={this.props.attributes.taste_sauces} setterFunction={this.props.setTasteSauces} />
          <AttributeSlider text={'Portionsgröße'} value={this.props.attributes.portion_size} setterFunction={this.props.setPortionSize} />

          <View>
            <Text>{`Preis: ${this.props.attributes.price.toFixed(2)}€`}</Text>
            <Slider
              style={styles.slider}
              width={Dimensions.get('window').width * 0.7}
              step={0.1}
              minimumValue={1}
              maximumValue={5}
              onValueChange={this.props.setPrice}
              value={this.props.attributes.price}
            />
          </View>

          <View style={styles.checkboxContainer}>
            <Text>{'Barrierefrei? '}</Text>
            <CheckBox
              style={styles.checkbox}
              value={this.props.attributes.barrier_free}
              onValueChange={this.props.setBarrierFree}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('List')}>
              <Text style={styles.buttonText}> Top 100 </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{...styles.button, backgroundColor: 'lightgreen'}}
              onPress={() => this.props.navigation.navigate('Publish')}>
              <Text style={styles.buttonText}> Publish </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>

    return (
      <View>{main}</View>
    );
  }
}

const mapStateToProps = (state) => {
  return { attributes: state.attributes };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTasteFries:  (value) => { dispatch( { type: "SET_TASTE_FRIES",   payload: value }) },
    setTasteSauces: (value) => { dispatch( { type: "SET_TASTE_SAUCES",  payload: value } ) },
    setPortionSize: (value) => { dispatch( { type: "SET_PORTION_SIZE",  payload: value } ) },
    setPrice:       (value) => { dispatch( { type: "SET_PRICE",         payload: value } ) },
    setBarrierFree: (value) => { dispatch( { type: "SET_BARRIER_FREE",  payload: value } ) },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
