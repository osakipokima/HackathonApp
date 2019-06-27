/* eslint-disable global-require */
/* eslint-disable react/sort-comp */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

class SplashScreen extends React.PureComponent {
  performTimeConsumingTask = async () => new Promise(resolve => setTimeout(
    () => { resolve('result'); },
    5000
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
    // const Logo = require('../../img/poly-hacks.png');
    const { container, viewStyles, textStyles } = styles;

    return (
      <View style={viewStyles}>
        <ImageBackground
          source={require('../../img/splash.gif')}
          style={container}
        >
          <Text style={textStyles}>
      Phoenix Hacks
          </Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    alignItems: 'center',
    flex: 1,
  },
  logoStyle: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
    marginBottom: 10,
  },
  container: {
    resizeMode: 'stretch',
    height: 400,
    width: '100%',
    backgroundColor: 'black',
    opacity: 0.7,
  }
};

export { SplashScreen };
