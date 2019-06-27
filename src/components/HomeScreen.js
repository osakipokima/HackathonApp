/* eslint-disable import/no-cycle */
/* eslint-disable global-require */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Button, View, TouchableOpacity, Image, Linking, ImageBackground,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
  Details,
  Schedule,
  LiveUpdates,
  FAQS,
  Map,
  About,
  Sponsors,
  Workshops,
} from '.';

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
    marginTop: 20,
    marginBottom: 10,
  },
  actions: {
    // backgroundColor: '#000000',
    justifyContent: 'center',
    marginTop: 100,
  },
  container: {
    resizeMode: 'stretch',
    height: 900,
    backgroundColor: 'black'
  }
};

class HomeScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  open = () => {
    Linking.openURL('http://phoenixhacks.com');
  }

  render() {
    const { logoStyle, container, actions } = styles;

    return (
      <ImageBackground
        style={container}
        source={require('../img/purple.gif')}
      >
        <TouchableOpacity onPress={this.open}>
          <Image source={Logo} style={logoStyle} />
        </TouchableOpacity>

        <View style={actions}>
          <Button
            title="Map"
            color="#8F40BF"
            onPress={() => this.props.navigation.navigate('map')}
          />
          <Button
            color="#8F40BF"
            title="Details"
            onPress={() => this.props.navigation.navigate('detailsPage')}
          />
          <Button
            color="#8F40BF"
            title="Schedule"
            onPress={() => this.props.navigation.navigate('schedule')}
          />

          <Button
            color="#8F40BF"
            title="Live Updates"
            onPress={() => this.props.navigation.navigate('liveUpdate')}
          />
          <Button
            color="#8F40BF"
            title="Workshops"
            onPress={() => this.props.navigation.navigate('workshops')}
          />
          <Button
            color="#8F40BF"
            title="Sponsors"
            onPress={() => this.props.navigation.navigate('sponsors')}
          />
          <Button
            color="#8F40BF"
            title="About"
            onPress={() => this.props.navigation.navigate('about')}
          />
          <Button
            title="FAQS"
            color="#8F40BF"
            onPress={() => this.props.navigation.navigate('faqs')}
          />

        </View>
      </ImageBackground>
    );
  }
}


export default createAppContainer(createStackNavigator(
  {
    screen: HomeScreen,
    detailsPage: Details,
    schedule: Schedule,
    liveUpdate: LiveUpdates,
    faqs: FAQS,
    map: Map,
    workshops: Workshops,
    sponsors: Sponsors,
    about: About
  }, {
    defaultNavigationOptions: {
      initialRouteName: 'Homescreen',
      title: 'Phoenix Hacks',
      headerStyle: {
        backgroundColor: '#8F40BF',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
      }
    }
  },
));
