/* eslint-disable global-require */
/* eslint-disable react/sort-comp */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { View, ImageBackground } from 'react-native';

class SplashScreen extends React.PureComponent {
  performTimeConsumingTask = async () => new Promise(resolve => setTimeout(
    () => { resolve('result'); },
    7000
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
    const { container, viewStyles } = styles;

    return (
      <View
        style={viewStyles}
        source={require('../../img/firegif.gif')}
      >
        <ImageBackground
          source={require('../../img/firegif.gif')}
          style={container}
        >
          {/* <Text style={textStyles}>
      Phoenix Hacks
          </Text> */}
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
    backgroundColor: '#060109',
    tintColor: 'black',
    opacity: 0.8
  },
  textStyles: {
    color: 'white',
    shadowColor: 'black',
    shadowOpacity: 1,
    opacity: 1,
    shadowRadius: 10,
    fontSize: 50,
    marginTop: '70%',
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
    // resizeMode: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    tintColor: 'black',
    // marginLeft: 10,
    // flex: 1,
    display: 'flex',
    height: 550,
    width: '100%',
    backgroundColor: 'black',
    opacity: 0.3,
  }
};

export { SplashScreen };
