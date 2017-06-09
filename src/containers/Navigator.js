import React from 'react';
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Text,
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../components/home/HomeScreen';
import PersonScreen from '../components/person/PersonScreen';
import Notifications from '../components/notifications/Notifications';
import Explore from '../components/explore/Explore';

const MyHomeScreen = ({ navigation }) => (
  <HomeScreen banner="Home Tab" navigation={navigation} />
);

MyHomeScreen.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name={focused ? 'ios-home' : 'ios-home-outline'}
      size={26}
      style={styles.tintColor}
    />
  ),
};

const MyExploreScreen = ({ navigation }) => (
  <Explore banner="Explore Tab" navigation={navigation} />
);

MyExploreScreen.navigationOptions = {
  tabBarLabel: 'Explore',
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name={focused ? 'ios-planet' : 'ios-planet-outline'}
      size={26}
      style={styles.tintColor}
    />
  ),
};

const MyNotificationsScreen = ({ navigation }) => (
  <Notifications banner="Notifications Tab" navigation={navigation} />
);

MyNotificationsScreen.navigationOptions = {
  tabBarLabel: 'Notifications',
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name={focused ? 'ios-notifications' : 'ios-notifications-outline'}
      size={26}
      style={styles.tintColor}
    />
  ),
};

const MyPersonScreen = ({ navigation }) => (
  <PersonScreen banner="PersonScreen Tab" navigation={navigation} />
);

MyPersonScreen.navigationOptions = {
  tabBarLabel: 'Person',
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name={focused ? 'ios-person' : 'ios-person-outline'}
      size={26}
      style={styles.tintColor}
    />
  ),
};

const Navigator = TabNavigator(
  {
    Home: {
      screen: MyHomeScreen,
      path: '',
    },
    Explore: {
      screen: MyExploreScreen,
      path: 'explore',
    },
    Notifications: {
      screen: MyNotificationsScreen,
      path: 'notifications',
    },
    Person: {
      screen: MyPersonScreen,
      path: 'person',
    },
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#333',
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: '#eee',
        borderBottomWidth: 0
      },
      iconStyle: {
        width: 22,
        height: 22,
      }
    },


  }
);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  button: {
    width: 200,
    height: 50,
    marginVertical: 10,
    backgroundColor: '#ff5542',
    alignSelf: 'center'
  },
  tintColor: {
    color: '#999'
  }
});

export default Navigator;