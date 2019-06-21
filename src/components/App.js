/* eslint-disable react/destructuring-assignment */
// eslint-disable-next-line react/destructuring-assignment
/* eslint-disable linebreak-style */
/* eslint-disable import/named */
/* eslint-disable linebreak-style */

import React from 'react';
import {
  Button, View, TouchableOpacity,
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

class HomeScreen extends React.PureComponent {
  // eslint-disable-next-line react/sort-comp
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>

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
      },
    },
  }
);


export default createAppContainer(AppNavigator);
