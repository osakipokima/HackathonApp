/* eslint-disable no-undef */
/* eslint-disable react/sort-comp */
/* eslint-disable react/no-unused-state */
/* eslint-disable global-require */
/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
// eslint-disable-next-line react/destructuring-assignment
/* eslint-disable linebreak-style */
/* eslint-disable import/named */
/* eslint-disable linebreak-style */

// import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { SplashScreen } from './SplashScreen';
import HomeScreen from './HomeScreen';


const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  App: HomeScreen,
});


export default createAppContainer(InitialNavigator);
