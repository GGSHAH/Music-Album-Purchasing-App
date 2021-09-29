import React, { Component } from 'react';
//import firebase from 'firebase';
import firebase from 'firebase';
import { Text, StyleSheet, View } from 'react-native';
import { Button, Card, CardSection, Input, Spinner, Header } from './common';
//import Spinner

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
     .catch(() => {
       firebase.auth().createUserWithEmailAndPassword(email, password)
       .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this));
   });
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication Failed',
      loading: false

    });
  }
  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    //else statement
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
         Login
        </Button>
      );
  }

  render() {
    return (

      <Card>
      <CardSection>
  <View
    style={{ flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9E9E9E',
         }}
  >
      <Text style={{ paddingTop: 10, fontSize: 18, fontWeight: '500' }}>Authentication</Text>
      </View>
      </CardSection>
      <CardSection>
      <Input
      placeholder={'user@gmail.com'}
      label="Email"
      value={this.state.email}
      onChangeText={email => this.setState({ email })}
      />
      </CardSection>

      <CardSection>
      <Input
      secureTextEntry
      placeholder={'Password'}
      label={'Password'}

      value={this.state.password}
      onChangeText={password => this.setState({ password })}
      />
      </CardSection>

      <Text style={styles.errorTextStyle}>{this.state.error}</Text>

      <CardSection>
      {this.renderButton()}
      </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#FF3D00'
  }
});
export default LoginForm;
