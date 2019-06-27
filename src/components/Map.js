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
            transform: [{ rotate: '90deg' }], width: 750, height: 400
          }}
        />
      </View>
    );
  }
}

export { Map };
