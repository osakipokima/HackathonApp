/* eslint-disable react/sort-comp */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { View, Text } from 'react-native';

class SplashScreen extends React.PureComponent {
  performTimeConsumingTask = async () => new Promise(resolve => setTimeout(
    () => { resolve('result'); },
    2000
  ))

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('App');
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>
        <Text style={styles.textStyles}>
      Phoenix Hacks
        </Text>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple'
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
};

export { SplashScreen };
