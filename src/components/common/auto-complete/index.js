import React, {Component} from 'react';
import {
  MDBListGroup,
  MDBListGroupItem,
  MDBCol,
  MDBFormInline,
  MDBIcon,
  MDBContainer,
} from 'mdbreact';

export class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      filteredOptions: [],
    };
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(option) {
    this.setState({filteredOptions: []});
    this.props.selectedOption(option);
  }
  onChange = (e) => {
    const options = this.props.opts;
    const userInput = e.currentTarget.value;
    const filteredOptions = options.filter(
      (option) =>
        option.properties[0].name
          .toLowerCase()
          .indexOf(userInput.toLowerCase()) > -1 ||
        option.properties[0].pincode.indexOf(userInput.toLowerCase()) > -1
    );
    this.setState({
      filteredOptions,
    });
    this.props.selectedArea(filteredOptions);
  };
  render() {
    return (
      <MDBContainer>
        <div className="search">
          <MDBCol>
            <MDBFormInline className="md-form">
              <MDBIcon icon="search" />
              <input
                className="form-control form-control-sm ml-4 w-250"
                type="text"
                placeholder="Search for areas/pincode"
                aria-label="Search"
                onChange={this.onChange}
                value={this.state.userInput}
              />
            </MDBFormInline>
          </MDBCol>
          {this.state.filteredOptions.length > 0 && (
            <ul>
              {this.state.filteredOptions.map((option, p) => (
                <MDBListGroup key={p} className="mx-4">
                  <MDBListGroupItem
                    color="info"
                    active
                    href="#"
                    onClick={() => this.onSelect(option)}
                  >
                    <MDBCol className="d-flex justify-content-between">
                      <small>
                        {option.properties[0].name}, {option.properties[0].district}
                      </small>
                      <small>{option.properties[0].pincode}</small>
                    </MDBCol>
                  </MDBListGroupItem>
                </MDBListGroup>
              ))}
            </ul>
          )}
        </div>
      </MDBContainer>
    );
  }
}

export default Autocomplete;
