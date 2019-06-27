import React from 'react';
import { View, Text } from 'react-native';

class About extends React.PureComponent {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About</Text>
      </View>
    );
  }
}

export { About };
