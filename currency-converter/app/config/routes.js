import { StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Options from '../screens/Options';
import Themes from '../screens/Themes';
import Home from '../screens/home';
import CurrencyList from '../screens/CurrencyList';

// export default createStackNavigator(
const HomeStack = createStackNavigator({
        Home: {
        screen: Home,
        navigationOptions: {
            // header: () => null,
            
        },
        },
        Options: {
            screen: Options,
            navigationOptions: {
            headerTitle: 'Options',
            },
        },
        Themes: {
            screen: Themes,
            navigationOptions: {
                headerTitle: 'Themes',
            },
        },
    },
    {
      headerMode: 'screen',
    },
  );
  
  const CurrencyListStack = createStackNavigator({
    CurrencyList: {
      screen: CurrencyList,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
      }),
    },
  });
  
const allStack = createStackNavigator(
    {
      Home: {
        screen: HomeStack,
      },
    CurrencyList: {
      screen: CurrencyListStack,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    cardStyle: { paddingTop: StatusBar.currentHeight },
  },
);

export default  createAppContainer(allStack);