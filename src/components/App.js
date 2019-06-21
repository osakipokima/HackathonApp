/* eslint-disable linebreak-style */
/* eslint-disable import/named */
/* eslint-disable linebreak-style */

import React from 'react';
import { Button, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
  Details,
  Schedule,
  LiveUpdates,
  FAQS,
  Header,
  Map,
} from '.';

class HomeScreen extends React.Component {
  // eslint-disable-next-line react/sort-comp
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Header headerText="PhoenixHacks" />
        <Button
          title="Details"
          // eslint-disable-next-line react/destructuring-assignment
          onPress={() => this.props.navigation.navigate('detailsPage')}
        />

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
);

export default createAppContainer(AppNavigator);
