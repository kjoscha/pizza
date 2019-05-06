import React from 'react';
import { TextInput, TouchableOpacity, View, ScrollView, Text, ImageBackground } from 'react-native';
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
      body: JSON.stringify( this.props.attributes ),
    })
    .then(function() {
      that.props.reset();
      that.props.navigation.navigate('List');
    });
  }

  render() {
    const publishButton = this.props.attributes.name.length >= 1 && this.props.attributes.description.length >= 1
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
      <ImageBackground source={require('../assets/fries.jpg')} style={{width: '100%', height: '100%'}}>
        <ScrollView contentContainerStyle={styles.container}>
          <TextInput
            autoFocus={true}
            multiline={true}
            style={styles.input}
            placeholder="What's the name?"
            onChangeText={(text) => this.props.setName(text)}
            value={this.props.attributes.name}
          />

          <TextInput
            multiline={true}
            style={styles.input}
            placeholder="Where is it located?"
            onChangeText={(text) => this.props.setDescription(text)}
            value={this.props.attributes.description}
          />

          {publishButton}
        </ScrollView>
      </ImageBackground>
    )
  }
}

const mapStateToProps = (state) => {
  return { attributes: state.attributes };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reset: () => dispatch({ type: "RESET" }),
    setName:        (text) => { dispatch({ type: "SET_NAME",        payload: text }) },
    setDescription: (text) => { dispatch({ type: "SET_DESCRIPTION", payload: text }) },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PublishScreen);
