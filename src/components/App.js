/* eslint-disable linebreak-style */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
  Details,
  Schedule,
  LiveUpdates,
  FAQS,
} from '.';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome to PolyHacks</Text>
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
    // workshops: Workshops
    // sponsors: Sponsors
    // about: About
    // map: Map
  },
);

export default createAppContainer(AppNavigator);
