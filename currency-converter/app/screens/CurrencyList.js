import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
//   FlatList, Text, StatusBar, View,
FlatList, StatusBar, View,
} from 'react-native';

import currencies from '../data/currencies';
import { ListItem, Separator } from '../components/List';

const TEMP_CURRENT_CURRENCY = 'CAD';
class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  handlePress = () => {
    // console.log('row press');
    const { navigation } = this.props;
    navigation.goBack(null);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        {/* <StatusBar translucent={false} barStyle="light-content" />  */}
        <FlatList
          data={currencies}
        //   renderItem={({ item }) => <Text>{item}</Text>}
        renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === TEMP_CURRENT_CURRENCY}
              onPress={this.handlePress}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

export default CurrencyList;