import React, { Component } from 'react';

import ClientList from '../containers/client-list';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="ui container">
            <ClientList />
        </div>
    );
  }
}

export default App;
