import React from 'react';
import { TouchableOpacity, View, ScrollView, Text, FlatList } from 'react-native';
import styles from './Styles';
import { RESTDB_IO_KEY } from './Secrets';

export default class ListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vendors: []
    }
  }

  fetchData() {
    console.log(RESTDB_IO_KEY)
    fetch('https://pizza-3a00.restdb.io/rest/vendors', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "x-apikey": RESTDB_IO_KEY,
        "cache-control": "no-cache"
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        vendors: responseJson
      });
    })
    .catch((error) => { console.error(error) });
  }

  render() {

    return (
      <ScrollView>
        <Text>List Screen</Text>
        <TouchableOpacity
          style={styles.listButton}
          onPress={() => console.log(this.fetchData())}>
          <Text style={styles.listButtonText}> {this.state.vendors.length} </Text>
        </TouchableOpacity>

        <FlatList
          data={this.state.vendors}
          renderItem={({item}) => <Text>{item.name} - {item.price}</Text>}
        />
      </ScrollView>
    );
  }
}
