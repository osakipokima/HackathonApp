import React from 'react';
import { View, Text } from 'react-native';

class Details extends React.PureComponent {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

export { Details };
