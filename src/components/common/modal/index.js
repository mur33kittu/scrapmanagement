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
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal = (opt) => {
    this.props.showModal({data: opt.data, option: opt.modalShow});
  };

  render() {
    return (
      <MDBContainer>
        <MDBModal isOpen={this.props.modalShow} centered>
          <MDBModalHeader toggle={this.toggleModal}>
            {this.props.title}
          </MDBModalHeader>
          <MDBModalBody>{this.props.children}</MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggleModal}>
              Close
            </MDBBtn>
            <MDBBtn color="primary" onClick={this.toggleModal}>
              Save changes
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default Modal;
