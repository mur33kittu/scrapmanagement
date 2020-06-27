import React, {Component} from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBCol,
} from 'mdbreact';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      modalShow: props.modalShow,
      data: props.data,
      calculatedValue: 0,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal = () => {
    this.setState({modalShow: false});
  };

  onChangeCalculate = (e) => {
    this.setState({calculatedValue: this.props.data.value * e.target.value});
  };
  render() {
    return (
      <MDBContainer>
        <MDBModal isOpen={this.props.modalShow} centered>
          <MDBModalHeader toggle={this.toggleModal}>
            <strong>{this.props.data.text}</strong>
          </MDBModalHeader>
          <MDBModalBody>
            <div>Title: {this.props.data.text}</div>
            <div>Price: {this.props.data.value}</div>
            <div>Pincode: {this.props.data.pincode}</div>
            <div>
              Quantity:
              <input
                className="form-control"
                type="text"
                placeholder="Enter Quantity"
                aria-label="Search"
                onChange={this.onChangeCalculate}
              />
              <div>Calculated Value: {this.state.calculatedValue}</div>
            </div>
          </MDBModalBody>
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
