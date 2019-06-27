/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {
  Button, View, Text
} from 'react-native';
import { createSwitchNavigator, createNavigationContainer } from 'react-navigation';
import { Card, CardSection } from '.';
import HomeScreen from './HomeScreen';
import { SplashScreen } from './SplashScreen';

const styles = {
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
};

class AuthRoute extends React.PureComponent {
  render() {
    const { card } = styles;

    return (
      <View>
        <Card>
          <View style={card}>
            <CardSection>

              <Text> Did you Pre-Register? </Text>
              <Button
                title="Yes"
                onPress={() => this.props.navigation.navigate('Yes')}
              />
              <Button
                title="No"
                onPress={() => this.props.navigation.navigate('No')}
              />
            </CardSection>
          </View>
        </Card>
      </View>
    );
  }
}

export default createNavigationContainer(createSwitchNavigator(
  {
    screen: AuthRoute,
    Yes: SplashScreen,
    No: HomeScreen,
  },
  {
    defaultNavigationOptions: {
      // initialRouteName: 'screen',
      // title: 'Phoenix Hacks',
      headerStyle: {
        backgroundColor: '#8F40BF',
      }
    },
  }
));
