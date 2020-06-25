import React, {useState} from 'react';

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
  MDBIcon,
} from 'mdbreact';

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

  loginForm = () => {
    return (
      <>
        <div
          className="modal fade"
          id="modalLRForm"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog cascading-modal" role="document">
            <div className="modal-content">
              <div className="modal-c-tabs">
                <ul
                  className="nav nav-tabs md-tabs tabs-2 light-blue darken-3"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#panel7"
                      role="tab"
                    >
                      <i className="fas fa-user mr-1"></i>
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#panel8"
                      role="tab"
                    >
                      <i className="fas fa-user-plus mr-1"></i>
                      Register
                    </a>
                  </li>
                </ul>

                <div className="tab-content">
                  <div
                    className="tab-pane fade in show active"
                    id="panel7"
                    role="tabpanel"
                  >
                    <div className="modal-body mb-1">
                      <div className="row my-3 d-flex justify-content-center">
                        <div className="md-form form-sm mb-5">
                          <button
                            type="button"
                            className="btn btn-white btn-rounded mr-md-3 z-depth-1a"
                          >
                            <i className="fab fa-facebook-f text-center"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-white btn-rounded z-depth-1a"
                            onClick={this.prepareLoginButton}
                            ref="googleLoginBtn"
                          >
                            <i className="fab fa-google-plus-g"></i>
                          </button>
                        </div>
                      </div>
                      <div className="md-form form-sm mb-5">
                        <i className="fas fa-envelope prefix"></i>
                        <input
                          type="email"
                          id="modalLRInput10"
                          className="form-control form-control-sm validate"
                        />
                        <label
                          data-error="wrong"
                          data-success="right"
                          htmlFor="modalLRInput10"
                        >
                          Your email
                        </label>
                      </div>

                      <div className="md-form form-sm mb-4">
                        <i className="fas fa-lock prefix"></i>
                        <input
                          type="password"
                          id="modalLRInput11"
                          className="form-control form-control-sm validate"
                        />
                        <label
                          data-error="wrong"
                          data-success="right"
                          htmlFor="modalLRInput11"
                        >
                          Your password
                        </label>
                      </div>
                      <div className="text-center mt-2">
                        <button className="btn btn-info">
                          Log in <i className="fas fa-sign-in ml-1"></i>
                        </button>
                      </div>
                    </div>

                    <div className="modal-footer">
                      <div className="options text-center text-md-right mt-1">
                        <p>
                          Not a member?{' '}
                          <a href="#" className="blue-text">
                            Sign Up
                          </a>
                        </p>
                        <p>
                          Forgot{' '}
                          <a href="#" className="blue-text">
                            Password?
                          </a>
                        </p>
                      </div>
                      <button
                        type="button"
                        className="btn btn-outline-info waves-effect ml-auto"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="panel8" role="tabpanel">
                    <div className="modal-body">
                      <div className="md-form form-sm mb-5">
                        <i className="fas fa-envelope prefix"></i>
                        <input
                          type="email"
                          id="modalLRInput12"
                          className="form-control form-control-sm validate"
                        />
                        <label
                          data-error="wrong"
                          data-success="right"
                          htmlFor="modalLRInput12"
                        >
                          Your email
                        </label>
                      </div>

                      <div className="md-form form-sm mb-5">
                        <i className="fas fa-lock prefix"></i>
                        <input
                          type="password"
                          id="modalLRInput13"
                          className="form-control form-control-sm validate"
                        />
                        <label
                          data-error="wrong"
                          data-success="right"
                          htmlFor="modalLRInput13"
                        >
                          Your password
                        </label>
                      </div>

                      <div className="md-form form-sm mb-4">
                        <i className="fas fa-lock prefix"></i>
                        <input
                          type="password"
                          id="modalLRInput14"
                          className="form-control form-control-sm validate"
                        />
                        <label
                          data-error="wrong"
                          data-success="right"
                          htmlFor="modalLRInput14"
                        >
                          Repeat password
                        </label>
                      </div>

                      <div className="text-center form-sm mt-2">
                        <button className="btn btn-info">
                          Sign up <i className="fas fa-sign-in ml-1"></i>
                        </button>
                      </div>
                    </div>

                    <div className="modal-footer">
                      <div className="options text-right">
                        <p className="pt-1">
                          Already have an account?{' '}
                          <a href="#" className="blue-text">
                            Log In
                          </a>
                        </p>
                      </div>
                      <button
                        type="button"
                        className="btn btn-outline-info waves-effect ml-auto"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <MDBIcon icon="user" data-toggle="modal" data-target="#modalLRForm" />
        </div>
      </>
    );
  };
  render() {
    return (
      <MDBNavbar color="default-color" dark expand="md">
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
              <MDBNavItem>
                <MDBNavLink to={path.key} key={index}>
                  {path.value}
                </MDBNavLink>
              </MDBNavItem>
            ))}
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav>{this.loginForm()}</MDBDropdownToggle>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Routes;
