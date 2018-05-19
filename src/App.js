import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: 'AIzaSyAEd93UIPltgJCh2N7PbQisnxxHPypS8Hk',
      authDomain: 'employeemanager-76c5c.firebaseapp.com',
      databaseURL: 'https://employeemanager-76c5c.firebaseio.com',
      projectId: 'employeemanager-76c5c',
      storageBucket: 'employeemanager-76c5c.appspot.com',
      messagingSenderId: '701672200053'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View />
      </Provider>
    );
  }
}

export default App;
