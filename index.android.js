import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ReactNativeWeibo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>An Weibo Demo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }, 
  title: {
    fontSize: 18,
    color: '#333'
  }
});

AppRegistry.registerComponent('ReactNativeWeibo', () => ReactNativeWeibo);
