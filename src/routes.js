import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import AboutusComponent from './components/about';
import ContactusComponent from './components/contactus';
import HomeComponent from './components/home';
import MakeAnOffer from './components/make-an-offer';
import createHistory from 'history/createBrowserHistory';
import FAQComponent from './components/faq';
import SpecViewComponent from './components/spec';
import logo from './assets/scrapanything.png';
import ServicesOfferedComponent from './components/services-offered';

const Routes = () => {
  const history = createHistory();
  return (
    <Router>
      <div>
        <img
          src={logo}
          alt="logo"
          style={{
            width: '150px',
            height: '50px',
            position: 'absolute',
            padding: '10px',
          }}
        />
        <ul className="nav justify-content-end">
          <li className="nav-item">
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

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
            <HomeComponent history={history} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
