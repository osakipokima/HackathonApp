/* eslint-disable linebreak-style */
/* eslint-disable global-require */
/* eslint-disable linebreak-style */
import React from 'react';
import { View, Image } from 'react-native';

const mapImg = require('../img/IST-map.jpg');

class Map extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={mapImg}
          style={{
            transform: [{ rotate: '90deg' }], resizeMode: 'stretch', width: '155%', height: '75%'
          }}
        />
      </View>
    );
  }
}

export { Map };
