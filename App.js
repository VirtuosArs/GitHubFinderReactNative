import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

export default createBottomTabNavigator  ({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Github Finder By ARS',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-search-outline" 
        color={tintColor}
        size={24} />
      )
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: '#fff',
      borderTopWidth: 0,
      shadowOffset: { width: 5, height: 5},
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5,
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
