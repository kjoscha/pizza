import React from 'react';
import { TextInput, TouchableOpacity, View, ScrollView, Text } from 'react-native';
import { connect } from "react-redux";

import styles from '../Styles';
import { RESTDB_IO_KEY } from '../Secrets';

class PublishScreen extends React.Component {
  constructor(props) {
    super(props);
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
        name: this.props.pizzaCalc.name,
        description: this.props.pizzaCalc.description,
        diameter: this.props.pizzaCalc.diameter,
        price: this.props.pizzaCalc.price,
        squaremeter_price: this.props.pizzaCalc.squaremeterPrice,
      }),
    })
    .then(function() {
      that.props.navigation.navigate('List');
    });
  }

  render() {
    const publishButton = this.props.pizzaCalc.name.length >= 3 && this.props.pizzaCalc.description.length >= 3
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
          <Text style={styles.result}>{ `A ${this.props.pizzaCalc.diameter}cm pizza for ${this.props.pizzaCalc.price}€...` }</Text>
          <Text style={styles.result}>One square meter would cost</Text>
          <Text style={styles.bigNumber}>{this.props.pizzaCalc.squaremeterPrice}€</Text>
        </View>

        <TextInput
          autoFocus={true}
          multiline={true}
          style={styles.input}
          placeholder="What's the name?"
          onChangeText={(text) => this.props.setName(text)}
        />

        <TextInput
          multiline={true}
          style={styles.input}
          placeholder="Where is it located?"
          onChangeText={(text) => this.props.setDescription(text)}
        />

        {publishButton}
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pizzaCalc: state.pizzaCalc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => { dispatch({ type: "SET_NAME", payload: name }) },
    setDescription: (description) => { dispatch({ type: "SET_DESCRIPTION", payload: description }) },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PublishScreen);

