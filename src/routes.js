import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import AboutusComponent from './components/about';
import ContactusComponent from './components/contactus';
import HomeComponent from './components/home';
import MakeAnOffer from './components/make-an-offer';
// import createHistory from 'history/createBrowserHistory';
import FAQComponent from './components/faq';
import SpecViewComponent from './components/spec';
// import logo from './assets/scrapanything.png';
import ServicesOfferedComponent from './components/services-offered';

const Routes = () => {
  // const history = createHistory();
  return (
    <Router>
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark amber scrolling-navbar">
          <a className="navbar-brand" href="#">
            <strong>Scrap Anything</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">
                  Services/Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/makeanoffer" className="nav-link">
                  Make an Offer
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav nav-flex-icons">
              <li className="nav-item">
                <a
                  className="btn-floating btn-lg btn-fb"
                  type="button"
                  role="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="btn-floating btn-lg btn-gplus"
                  type="button"
                  role="button"
                >
                  <i className="fab fa-google-plus-g"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/about">
            <AboutusComponent />
          </Route>
          <Route path="/contact">
            <ContactusComponent />
          </Route>
          <Route path="/makeanoffer">
            <MakeAnOffer />
          </Route>
          <Route path="/faq">
            <FAQComponent />
          </Route>
          <Route path="/spec">
            <SpecViewComponent />
          </Route>
          <Route path="/services">
            <ServicesOfferedComponent />
          </Route>
          <Route path="/">
            <HomeComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
