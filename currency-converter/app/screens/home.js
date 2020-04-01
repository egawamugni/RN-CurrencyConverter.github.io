// import React from 'react';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView} from 'react-native';
import { LastConverted } from '../components/Text';
import { Container } from '../components/container';
import { ClearButton } from '../components/button';
import { Logo } from '../components/logo';
import { InputWithButton } from '../components/TextInput';
import { Header } from '../components/Header';

import { changeCurrencyAmount, swapCurrency } from '../actions/currencies';

// export default () => (
//   <Container>o
//     <StatusBar translucent={false} barStyle="light-content" />
//     <Logo />
//   </Container>
// );

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7975;
const TEMP_CONVERSION_DATE = new Date ();

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  // handleChangeText = () => {
  //   console.log('change text');
  handleChangeText = (text) => {
    // TODO: Dispatch this action to redux
    console.log(changeCurrencyAmount(text));  
};

  handlePressBaseCurrency = () => {
    // console.log('press base currency');
    const { navigation } = this.props;
    navigation.navigate('CurrencyList', { title: 'Base Currency' });
  };

  handlePressQuoteCurrency = () => {
    // console.log('press quote currency');
    const { navigation } = this.props;
    navigation.navigate('CurrencyList', { title: 'Quote Currency' });
  };

  handleSwapCurrency = () => {
  //   console.log('handle swap currency');
  // };

  // handleSwapCurrency = () => {
  //   console.log('handle swap currency');
  // };
      // TODO: Dispatch this action to redux
      console.log(swapCurrency());
  };

  handleOptionsPress = () => {
    // console.log('options press');
    const { navigation } = this.props;
    navigation.navigate('Options');
  };


  render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handlePressBaseCurrency}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
            onChangeText={this.handleChangeText}
          />
          <InputWithButton
            editable={false}
            buttonText={TEMP_QUOTE_CURRENCY}
            onPress={this.handlePressQuoteCurrency}
            value={TEMP_QUOTE_PRICE}
          />
          <LastConverted
            // date={TEMP_LAST_CONVERTED}
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            conversionRate={TEMP_CONVERSION_RATE}
          />
          <ClearButton onPress={this.handleSwapCurrency} text="Reverse Currencies" />
        </KeyboardAvoidingView>
      </Container>
    );
  };
};
export default Home;