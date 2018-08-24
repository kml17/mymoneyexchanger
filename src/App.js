import React, { Component } from 'react';
import Main from './components/Main.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{ flex: 1 }}>
        <div style={styles.viewMainItems}>
          <Main />
        </div>
      </div>
    );
  };
}

const styles = {
  viewMainItems: {
    margin: 20
  }
}

export default App;