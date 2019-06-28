/* eslint-disable import/no-cycle */
import React from 'react';
import { View } from 'react-native';
import { LoginForm } from './LoginForm';
import {
  Card, Header
} from '.';

const styles = {
  view: {
    marginTop: 20,
    backgroundColor: 'black'
  }
};

class LoginScreen extends React.PureComponent {
  render() {
    const { view } = styles;
    return (
      <View style={view}>
        <Card>
          <Header />
          <LoginForm />
        </Card>
      </View>
    );
  }
}

export { LoginScreen };
