import React from 'react';
import './App.css';
import Routes from './routes';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container-fluid">
        <header>{Routes()}</header>
      </div>
    );
  }
}

export default App;
