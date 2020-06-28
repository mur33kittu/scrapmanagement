import React, {Component} from 'react';
import './index.css';
import Modal from '../common/modal';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
  MDBBtn,
  MDBBadge,
} from 'mdbreact';
import PinCode from '../../assets/json/pincode.json';
import Autocomplete from '../common/auto-complete';
import ServiceItems from '../../assets/json/services_offered.json';
// import {MapContainer} from '../maps-container';
import {Map, GoogleApiWrapper} from 'google-maps-react';

class ServicesOfferedComponent extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.pinCode = PinCode.features;
    this.state = {
      selectedOptions: [],
      modalShow: false,
      selectedItem: {},
      calculatedValue: 0,
      selectedAddress: [],
      showCalculation: false,
      showMaps: false,
    };
    this.selectedOptionData = this.selectedOptionData.bind(this);
    this.toggle = this.toggle.bind(this);
    this.setOption = this.setOption.bind(this);
    this.showMap = this.showMap.bind(this);
  }

  toggle = (opt) => {
    this.setState({
      modalShow: opt.modalShow,
      option: opt.option,
      showCalculation: true,
      showMaps: false,
    });
  };

  setOption = (opt) => {
    this.setState({
      selectedItem: opt.option,
      modalShow: true,
      showCalculation: true,
      showMaps: false,
    });
  };

  selectedOptionData(selectedOption) {
    const items = ServiceItems.items.filter(
      (item) => item.pincode === Number(selectedOption.properties.pincode)
    );
    this.setState({selectedOptions: items});
  }

  onChangeCalculate = (e) => {
    this.setState({
      calculatedValue: this.state.selectedItem.value * e.target.value,
    });
  };

  selectedArea = (e) => {
    this.setState({
      selectedAddress: e,
    });
  };

  showMap() {
    this.setState({
      modalShow: true,
      showCalculation: false,
      showMaps: true,
      selectedItem: {},
    });
  }

  render() {
    const address =
      this.state.selectedAddress.length > 0 &&
      this.state.selectedAddress[0].properties;
    return (
      <div className="row ml-1 mb-5">
        <div>
          <br />
          <h3>Services Offered and Pricing:</h3>
          <br />
          <MDBContainer>
            <MDBRow>
              <Autocomplete
                opts={this.pinCode}
                selectedOption={this.selectedOptionData}
                selectedArea={this.selectedArea}
              />
              <MDBCol md="6">
                {address ? (
                  <MDBBadge
                    pill
                    color="success"
                    onClick={this.showMap}
                    className="show-pointer"
                    tag="address"
                  >
                    {address.name}, {address.district}, {address.state}.{' '}
                    {address.pincode}&nbsp;
                    <MDBIcon icon="map-marker-alt" />
                  </MDBBadge>
                ) : (
                  <MDBBadge pill color="success">
                    No Records Found
                  </MDBBadge>
                )}
              </MDBCol>
            </MDBRow>
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
                      <MDBBtn
                        rounded
                        color="info"
                        onClick={() =>
                          this.setOption({
                            option: option,
                            modalShow: true,
                          })
                        }
                      >
                        Calculate Price
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              ))}
            </MDBRow>
            {this.state.modalShow && (
              <Modal
                modalShow={this.state.modalShow}
                data={this.state.selectedItem}
                showModal={this.toggle}
                title={<div>{this.state.selectedItem.text}</div>}
              >
                {this.state.showCalculation && (
                  <div>
                    <MDBCol md="6">
                      Price: <small>{this.state.selectedItem.value}</small>
                    </MDBCol>
                    <MDBCol md="6">
                      Pincode: <small>{this.state.selectedItem.pincode}</small>
                    </MDBCol>
                    <MDBCol md="6">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Quantity in numbers"
                        aria-label="Search"
                        onChange={this.onChangeCalculate}
                      />
                    </MDBCol>
                    <MDBCol md="6">
                      Calculated Value:{' '}
                      <small>{this.state.calculatedValue}</small>
                    </MDBCol>
                  </div>
                )}
                {this.state.showMaps && (
                  <div
                    id="map-container"
                    className="rounded z-depth-1-half map-container"
                    style={{height: '400px'}}
                  >
                    {this.state.selectedAddress[0].properties.name},{' '}
                    {this.state.selectedAddress[0].properties.city},{' '}
                    {this.state.selectedAddress[0].properties.state},{' '}
                    {this.state.selectedAddress[0].properties.pincode}
                    <iframe
                      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_API_KEY}&q=${this.state.selectedAddress[0].properties.pincode}`}
                      title="This is a unique title"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      style={{border: 0}}
                    />
                  </div>
                )}
              </Modal>
            )}
          </MDBContainer>
        </div>
      </div>
    );
  }
}

export default ServicesOfferedComponent;

// export default GoogleApiWrapper({
//   apiKey: process.env.REACT_APP_API_KEY,
// })(ServicesOfferedComponent);
