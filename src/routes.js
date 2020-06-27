import React from 'react';

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
} from 'mdbreact';
import LoginFormComponent from './components/login';

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      isOpen: false,
    };
  }

  toggleCollapse = () => {
    this.setState({isOpen: !this.state.isOpen});
  };

  render() {
    return (
      <MDBNavbar color="default-color" dark expand="xl">
        <MDBNavbarBrand>
          <strong className="white-text">Scrap Anything</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            {[
              {key: '/home', value: 'Home'},
              {key: '/about', value: 'About'},
              {key: '/services', value: 'Services Offered'},
              {key: '/contact', value: 'Contact Us'},
              {key: '/makeanoffer', value: 'Make An Offer'},
            ].map((path, index) => (
              <MDBNavItem key={index}>
                <MDBNavLink to={path.key} key={index}>
                  {path.value}
                </MDBNavLink>
              </MDBNavItem>
            ))}
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav>
                  <LoginFormComponent />
                </MDBDropdownToggle>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Routes;
