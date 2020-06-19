import React from 'react';
import './App.css';
import Routes from './routes';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <header>{Routes()}</header>
        <footer className="footer navbar-fixed-bottom">
          ©2020 scrapanything.com – All rights reserved – Terms and Conditions:
          Sales | Purchase Orders
        </footer>
      </div>
    );
  }
}

export default App;
