import React, {Component} from 'react';
import {MDBIcon, MDBBadge} from 'mdbreact';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {GrGoogle, GrFacebookOption} from 'react-icons/gr';
import {UserService} from '../../services/axios/user.service';

class LoginFormComponent extends Component {
  state = {
    name: '',
    loginType: '',
    userObject: {},
  };

  responseFacebook = (response) => {
    if (response) {
      this.setState({
        name: response.name,
        loginType: 'facebook',
        userObject: response,
      });
      this.saveUserInformation(response.profileObj);
    }
  };

  responseGoogle = (response) => {
    if (response) {
      this.setState({
        name:
          response.profileObj.givenName + ' ' + response.profileObj.familyName,
        loginType: 'google',
        userObject: response,
      });
      this.saveUserInformation(response.profileObj);
    }
  };

  saveUserInformation(data) {
    if (data) {
      UserService.updateUserInfo(data)
        .then((res) => console.log(res))
        .catch((err) => console.log('Error updating information', err));
    }
  }

  render() {
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
              <div className="modal-header light-blue darken-3 white-text">
                <h4 className="title">
                  <i className="fas fa-users"></i> Login with your Social
                  Network
                </h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body mb-0  text-center">
                <FacebookLogin
                  appId={process.env.REACT_APP_facebookAppId}
                  fields="name,email,picture"
                  icon={<GrFacebookOption />}
                  callback={this.responseFacebook}
                  textButton=""
                />
                &nbsp;&nbsp; &nbsp;
                <GoogleLogin
                  clientId={process.env.REACT_APP_googleClientId}
                  buttonText=""
                  icon={<GrGoogle />}
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                />
                <div>Logged in as {this.state.name}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <MDBIcon icon="user" data-toggle="modal" data-target="#modalLRForm" />
          <div>
            <MDBBadge pill color="primary" className="ml-2">
              {this.state.loginType === 'facebook' && (
                <MDBIcon fab icon="facebook-f" />
              )}
              {this.state.loginType === 'google' && (
                <MDBIcon fab icon="google" />
              )}
              {this.state.name}
            </MDBBadge>
          </div>
        </div>
      </>
    );
  }
}

export default LoginFormComponent;
