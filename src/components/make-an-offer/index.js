import React, {Component} from 'react';

export default class MakeAnOffer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div>
        <p className="h4">Get A Quick Quote For Your Scrap</p>
        <p className="lead">
          Fill in the quote request form below to tell us more about your scrap
          and we will send you a quote within 2-3 days.
        </p>
        <p className="lead">
          <form className="form">
            <div className="form-group row">
              <label for="firstName" className="col-sm-4 col-form-label">
                First Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Enter First Name"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="lastName" className="col-form-label col-sm-4">
                Last Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Enter Last Name"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="phone" className="col-form-label col-sm-4">
                Phone
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your Phone Number with Country Code"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="org" className="col-form-label col-sm-6">
                Your Business Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="org"
                  placeholder="Enter your Phone Number with Country Code"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="email" className="col-sm-6 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your Email Address"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="whatisit" className="col-sm-12 col-form-label">
                What Is It? Please Describe The Scrap You Have
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="whatisit"
                  placeholder="Enter the scrap description"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="madefrom" className="col-form-label col-sm-12">
                What Materials Is The Scrap Made From?
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="madefrom"
                  placeholder="Enter the scrap description"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="weight" className="col-form-label  col-sm-12">
                What is the weight of the scrap?
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="weight"
                  placeholder="Enter the weight of the scrap"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="contaminants" className="col-form-label  col-sm-12">
                Are There Any Contaminants? If so, please describe.
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="contaminants"
                  placeholder="Explain the scrap contaminants"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="contaminants" className="col-form-label  col-sm-12">
                Upload Photos Of Your Scrap (Up To 10 Images)
              </label>
              <div className="col-sm-10">
                <input
                  type="file"
                  className="custom-file-input"
                  id="validatedInputGroupCustomFile"
                  required
                />
                <label
                  className="custom-file-label col-sm-12"
                  for="validatedInputGroupCustomFile"
                >
                  Choose file...
                </label>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button className="btn btn-primary" type="submit">
                  Submit Your Quote Request
                </button>
              </div>
            </div>
          </form>
        </p>
      </div>
    );
  }
}
