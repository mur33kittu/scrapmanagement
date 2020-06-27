import React, {Component} from 'react';
import './index.css';
import Modal from '../common/modal';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBView,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
  MDBBtn,
} from 'mdbreact';
import PinCode from '../../assets/json/pincode.json';
import Autocomplete from '../common/auto-complete';
import ServiceItems from '../../assets/json/services_offered.json';

export default class ServicesOfferedComponent extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.pinCode = PinCode.features;
    this.state = {
      selectedOptions: [],
    };
    this.selectedOptionData = this.selectedOptionData.bind(this);
  }

  selectedOptionData(selectedOption) {
    const items = ServiceItems.items.filter(
      (item) => item.pincode === Number(selectedOption.properties.pincode)
    );
    this.setState({selectedOptions: items});
  }

  render() {
    return (
      <div className="row ml-1 mb-5">
        <div>
          <br />
          <h3>Services Offered and Pricing:</h3>
          <br />
          <MDBContainer>
            <Autocomplete
              opts={this.pinCode}
              selectedOption={this.selectedOptionData}
            />
            <MDBRow>
              {this.state.selectedOptions.map((option, optKey) => (
                <MDBCol md="4" key={optKey} className="pt-4">
                  <MDBCard>
                    <MDBCardBody cascade className="text-center">
                      <MDBCardTitle className="card-title">
                        <small>{option.text}</small>
                      </MDBCardTitle>

                      <p className="font-weight-bold blue-text">
                        Name: {option.text}
                      </p>

                      <MDBCardText>Price: {option.value}</MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              ))}
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    );
  }
}
