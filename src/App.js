import React from 'react';
import './App.css';
import Routes from './routes';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <header>{Routes()}</header>

        <footer className="page-footer font-small special-color-dark pt-4">
          <div className="container">
            <ul className="list-unstyled list-inline text-center">
              <li className="list-inline-item">
                <a className="btn-floating btn-fb mx-1">
                  <i className="fab fa-facebook-f"> </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-floating btn-tw mx-1">
                  <i className="fab fa-twitter"> </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-floating btn-gplus mx-1">
                  <i className="fab fa-google-plus-g"> </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-floating btn-li mx-1">
                  <i className="fab fa-linkedin-in"> </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-floating btn-dribbble mx-1">
                  <i className="fab fa-dribbble"> </i>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-copyright text-center py-3">
            © 2020 Copyright:
            <a href="#"> scrapanything.com</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
