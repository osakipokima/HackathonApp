/* eslint-disable linebreak-style */
import React from 'react';
import { View, Text } from 'react-native';


class Details extends React.PureComponent {
  render() {
    return (
      <View style={{
        flex: 1, alignItems: 'center', bottom: 0, left: 0
      }}
      >
        <Text>Details Screen</Text>
      </View>
    );
  }
}

export { Details };
