import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, StatusBar } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './src/Components/common';

//import header from './src/Components/header';  //import header component
//import albumList from './src/Components/albumList';
import LoginForm from './src/Components/LoginForm';
import AlbumList from './src/Components/AlbumList';

class App extends Component {
  state = { loggedIn: null }
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyC6Q5kFwQnUPpbS_GiekF3ir4d9GX0cMSI',
    authDomain: 'login-ee84d.firebaseapp.com',
    databaseURL: 'https://login-ee84d.firebaseio.com',
    projectId: 'login-ee84d',
    storageBucket: 'login-ee84d.appspot.com',
    messagingSenderId: '1001728696123'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
<ScrollView>

        <View>
        <Header headerText={'Albums'} />
        </View>
  <View>
        <AlbumList />
        </View>

<View>
        <CardSection>
   <Button onPress={() => firebase.auth().signOut()} style={{ }}>Log Out</Button>
        </CardSection>
        </View>

        </ScrollView>

     );

      case false:
        return <LoginForm />;
      default:
        return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 250 }}>
        <Spinner size="large" />
        </View>
      );
    }
  }

  render() {
    return (
      <View>

      {this.renderContent()}
      </View>
    );
  }
}

export default App;
