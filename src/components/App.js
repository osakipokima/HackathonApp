/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
// eslint-disable-next-line react/destructuring-assignment
/* eslint-disable linebreak-style */
/* eslint-disable import/named */
/* eslint-disable linebreak-style */

import React from 'react';
import {
  Button, View, TouchableOpacity, Image, Linking
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
  Details,
  Schedule,
  LiveUpdates,
  FAQS,
  Header,
  Map,
} from '.';
// mport poly-hacks.png from '/Users/jonathan/Code/HackathonApp/src/img/poly-hacks.png';

const Logo = require('../img/poly-hacks.png');

const styles = {
  logoStyle: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 8,
    marginBottom: 10,
  }
};


class HomeScreen extends React.PureComponent {
  open = () => { Linking.openURL('http://phoenixhacks.com'); };

  render() {
    const { logoStyle } = styles;
    return (
      <View>
        <TouchableOpacity onPress={this.open}>
          <Image source={Logo} style={logoStyle} />
        </TouchableOpacity>

        <View style={{ justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('detailsPage')}>
            <Header headerText="Details" />
          </TouchableOpacity>

          <Button
            title="Schedule"
          // eslint-disable-next-line react/destructuring-assignment
            onPress={() => this.props.navigation.navigate('schedule')}
          />

          <Button
            title="Live Updates"
          // eslint-disable-next-line react/destructuring-assignment
            onPress={() => this.props.navigation.navigate('liveUpdate')}
          />

          <Button
            title="FAQS"
          // eslint-disable-next-line react/destructuring-assignment
            onPress={() => this.props.navigation.navigate('faqs')}
          />
          <Button
            title="Map"
          // eslint-disable-next-line react/destructuring-assignment
            onPress={() => this.props.navigation.navigate('map')}
          />

        </View>
      </View>
    );
  }
}


const AppNavigator = createStackNavigator(
  {
    screen: HomeScreen,
    detailsPage: Details,
    schedule: Schedule,
    liveUpdate: LiveUpdates,
    faqs: FAQS,
    map: Map,
    // workshops: Workshops
    // sponsors: Sponsors
    // about: About
  },
  {
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      title: 'Phoenix Hacks',
      headerStyle: {
        backgroundColor: '#8F40BF',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
      },
    },
  }
);


export default createAppContainer(AppNavigator);
