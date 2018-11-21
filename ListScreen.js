import React from 'react';
import { View, ScrollView, Text, FlatList } from 'react-native';
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

  render() {
    const table = this.state.vendors.length > 1 ?
      <FlatList
        data={this.state.vendors}
        keyExtractor={(item, index) => `list-item-${item.id}`}
        renderItem={({item}) => <Text style={styles.listItem}>{item.name} - {item.price}</Text>}
      /> :
      <Text>loading...</Text>

    return (
      <ScrollView>
        {table}
      </ScrollView>
    );
  }
}
