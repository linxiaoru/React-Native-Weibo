import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Notifications extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    const banner = this.props.banner;
    return (
      <View style={styles.container}>
        <Text>{banner}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});