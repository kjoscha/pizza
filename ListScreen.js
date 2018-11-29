import React from 'react';
import { View, ScrollView, Text, FlatList } from 'react-native';
import Vendor from './Vendor';
import styles from './Styles';
import { RESTDB_IO_KEY } from './Secrets';

export default class ListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vendors: []
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
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

  sortByPrice(vendors) {
    return vendors.sort(function (a, b) {
      return a.squaremeter_price - b.squaremeter_price;
    });
  }

  render() {
    const table = this.state.vendors.length > 0 ?
      <FlatList
        data={this.sortByPrice(this.state.vendors)}
        keyExtractor={(item, index) => `list-item-${item.id}`}
        renderItem={({item}) => <Vendor item={item} />}
      /> :
      <Text>waiting for pizzas...</Text>

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {table}
      </ScrollView>
    );
  }
}
