import React, {Component} from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from 'mdbreact';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    // console.log(this.props.data);
  }
  state = {
    modal8: false,
    modal9: false,
  };

  toggle = (nr) => () => {
    let modalNumber = 'modal' + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn color="info" onClick={this.toggle(9)}>
          Calculate Cost
        </MDBBtn>
        <MDBModal
          isOpen={this.state.modal9}
          toggle={this.toggle(9)}
          fullHeight
          position="bottom"
        >
          <MDBModalHeader toggle={this.toggle(9)}>
            Title Goes here
          </MDBModalHeader>
          <MDBModalBody>
            Modal Goes here
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(9)}>
              Close
            </MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default Modal;
