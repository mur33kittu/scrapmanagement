import React, {Component} from 'react';
import {MDBIcon, MDBTooltip} from 'mdbreact';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {GrGoogle, GrFacebookOption} from 'react-icons/gr';

class LoginFormComponent extends Component {
  state = {
    name: '',
  };

  componentDidMount() {
    console.log(process.env.googleClientId);
  }
  responseFacebook = (response) => {
    console.log(response);
    this.setState({name: response.name});
  };

  responseGoogle = (response) => {
    console.log(response);
  };

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
              <div class="modal-header light-blue darken-3 white-text">
                <h4 class="title">
                  <i class="fas fa-users"></i> Login with your Social Network
                </h4>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body mb-0  text-center">
                <FacebookLogin
                  appId={process.env.facebookAppId}
                  fields="name,email,picture"
                  icon={<GrFacebookOption />}
                  callback={this.responseFacebook}
                  textButton=""
                />
                &nbsp;&nbsp; &nbsp;
                <GoogleLogin
                  clientId={process.env.googleClientId}
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
        </div>
      </>
    );
  }
}

export default LoginFormComponent;
