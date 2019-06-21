import React from 'react';
import { View, Text } from 'react-native';

class LiveUpdates extends React.PureComponent {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          Live Updates
        </Text>
      </View>
    );
  }
}

export { LiveUpdates };
