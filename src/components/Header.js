/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { header, view } = styles;
  return (
    <View style={view}>

      <Text style={header}>
        {props.headerText}
      </Text>

    </View>
  );
};

const styles = {
  header: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    top: '20%',
    backgroundColor: '#8F40BF',

  },
  view: {
    // Color: '#8F40BF',
    // justifyContent: 'top',
    alignItems: 'auto',
    paddingTop: 25,
    paddingBottom: 10,
    // shadowColor: '#2792eb',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    elevation: 1,
    marginBottom: 1,
    position: 'relative'
  }
};

export { Header };
