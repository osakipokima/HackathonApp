/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Details } from '.';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          // eslint-disable-next-line react/destructuring-assignment
          onPress={() => this.props.navigation.navigate('detailsPage')}
        />
      </View>
    );
  }
}


const AppNavigator = createStackNavigator(
  {
    screen: HomeScreen,
    detailsPage: Details

  },

);

export default createAppContainer(AppNavigator);


// export default class App extends Component {

//   render() {
//     const { container, welcome, instructions } = styles;
//     return (
//       <View style={container}>
//         <Text style={welcome}>PhoenixHacks</Text>
//         <Text style={instructions}>November 2nd - 3rd</Text>
//         <Text style={instructions}>Come join us</Text>

//         <Button title='Next'
//         onPress={openHome}
//         />
//       </View>
//     );
//   };
// }

// const styles = {
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// };
