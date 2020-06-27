import React from 'react';
import './App.css';
import Routes from './routes';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import AboutusComponent from './components/about';
import ContactusComponent from './components/contactus';
import MakeAnOffer from './components/make-an-offer';
import FAQComponent from './components/faq';
import SpecViewComponent from './components/spec';
import ServicesOfferedComponent from './components/services-offered';
import HomeComponent from './components/home';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <Router>
            <Routes />
            <Switch>
              <main>
                <div className="container-fluid">
                  <Route path="/about" exact>
                    <AboutusComponent />
                  </Route>
                  <Route path="/contact" exact>
                    <ContactusComponent />
                  </Route>
                  <Route path="/makeanoffer" exact>
                    <MakeAnOffer />
                  </Route>
                  <Route path="/faq" exact>
                    <FAQComponent />
                  </Route>
                  <Route path="/spec" exact>
                    <SpecViewComponent />
                  </Route>
                  <Route path="/services" exact>
                    <ServicesOfferedComponent />
                  </Route>
                  <Route path="/home" exact>
                    <HomeComponent />
                  </Route>
                  <Route path="/" exact>
                    <HomeComponent />
                  </Route>
                </div>
              </main>
            </Switch>
          </Router>
        </header>
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
      </>
    );
  }
}

export default App;
