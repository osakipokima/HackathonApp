/* eslint-disable import/no-cycle */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/sort-comp */
import React from 'react';
import { TextInput, View, Text } from 'react-native';
import firebase from 'firebase';
import {
  Spinner, CardSection, Card, Button
} from '.';

class LoginForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      Email: '', Password: '', error: '', loading: false
    };
  }


  onButtonPress() {
    const { Email, Password } = this.state;
    this.setState({ error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(Email, Password)
      .then(this.onLoginSucess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(Email, Password)
          .then(this.onLoginSucess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }


  renderButton() {
    if (this.state.loading === true) {
      return <Spinner size="small" />;
    }
    return (
      <View style={styles.loginButton}>
        <Button onPress={this.onButtonPress.bind(this)}>
          <Text>Login </Text>
        </Button>
      </View>
    );
  }

  onLoginFail() {
    this.setState({ error: '(Idk bro that didnt work, Please try again)', loading: 'false' });
  }

  onLoginSucess() {
    this.setState({
      Email: '',
      Password: '',
      loading: false,
      error: '',
    });
  }


  render() {
    const {
      label, errorTextStyle, inputText, viewPosition, text
    } = styles;
    return (
      <Card>
        <View style={viewPosition}>
          <CardSection>
            <View style={label}>
              <Text style={text}> Email : </Text>
            </View>

            <TextInput
              style={inputText}
              autoCorrect={false}
              onChangeText={Email => this.setState({ Email })}
              placeholder="User@email.com"
              value={this.state.Email}
            />
          </CardSection>

          <Text style={errorTextStyle}>{this.state.error}</Text>

          <CardSection>
            <View style={label}>
              <Text style={text}> Password : </Text>
            </View>

            <TextInput
              style={inputText}
              autoCorrect={false}
              secureTextEntry
              onChangeText={Password => this.setState({ Password })}
              placeholder="Enter Password"
              value={this.state.Password}
            />
          </CardSection>
        </View>

        {this.renderButton()}
      </Card>
    );
  }
}

const styles = {
  viewStyle: {
    borderColor: '#fff',
    alignItems: 'center'
  },
  text: {
    color: '#2792eb',
    fontWeight: 'bold',
    justifyContent: 'center',
    marginRight: 5,
  },
  label: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  errorTextStyle: {
    fontSize: 15,
    alignSelf: 'center',
    color: 'red',
    backgroundColor: 'white',
    fontWeight: 'bold'
  },
  orText: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    marginTop: 1,
    marginBottom: 1
  },
  buttonPositionStyle: {
    alignSelf: 'center',
    flexDirection: 'row'
  },
  loginButton: {
    paddingBottom: 15
  },
  inputText: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    height: 40,
    display: 'flex',
    marginLeft: -5,
  },
  viewPosition: {
    alignItems: 'center'
  }
};

export { LoginForm };
