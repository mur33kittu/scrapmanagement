import React, {Component} from 'react';
import {
  MDBListGroup,
  MDBListGroupItem,
  MDBCol,
  MDBFormInline,
  MDBIcon,
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
        option.properties.name.toLowerCase().indexOf(userInput.toLowerCase()) >
          -1 || option.properties.pincode.indexOf(userInput.toLowerCase()) > -1
    );
    this.setState({
      filteredOptions,
    });
  };
  render() {
    return (
      <React.Fragment>
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
                <MDBListGroup key={p}>
                  <MDBListGroupItem
                    active
                    href="#"
                    action
                    onClick={() => this.onSelect(option)}
                  >
                    <div className="d-flex w-150 justify-content-between">
                      <div>
                        {option.properties.name}, {option.properties.district}
                      </div>
                      <small>{option.properties.pincode}</small>
                    </div>
                  </MDBListGroupItem>
                </MDBListGroup>
              ))}
            </ul>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Autocomplete;
