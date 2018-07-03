import React, { Component } from 'react';

import ClientList from '../containers/client-list';
import ClientInfo from '../containers/client-info';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="ui container">
            <ClientList />
            <ClientInfo />
        </div>
    );
  }
}

export default App;
