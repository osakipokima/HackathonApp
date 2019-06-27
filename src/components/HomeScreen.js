/* eslint-disable import/no-cycle */
/* eslint-disable global-require */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Button, View, ImageBackground,
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
  Logo
} from '.';

const styles = {
  actions: {
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

  render() {
    const { container, actions } = styles;

    return (
      <ImageBackground
        style={container}
        source={require('../img/purple.gif')}
      >

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
      headerTitle: <Logo />,
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
      }
    }
  },
));
