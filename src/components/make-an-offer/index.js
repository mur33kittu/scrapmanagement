import React, {Component} from 'react';
import {sendEmail} from '../services/email';

export default class MakeAnOffer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    sendEmail({
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      phone: e.target[2].value,
      businessName: e.target[3].value,
      email: e.target[4].value,
      whatisit: e.target[5].value,
      materials: e.target[6].value,
      weight: e.target[7].value,
      contaminants: e.target[8].value,
    });
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <p className="h4">Get A Quick Quote For Your Scrap</p>
        <p className="lead">
          Fill in the quote request form below to tell us more about your scrap
          and we will send you a quote within 2-3 days.
        </p>
        <div className="lead">
          <form className="form" onSubmit={this.submitForm}>
            <div className="form-group row">
              <label htmlFor="firstName" className="col-sm-4 col-form-label">
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
              <label htmlFor="lastName" className="col-form-label col-sm-4">
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
              <label htmlFor="phone" className="col-form-label col-sm-4">
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
              <label htmlFor="org" className="col-form-label col-sm-6">
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
              <label htmlFor="email" className="col-sm-6 col-form-label">
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
              <label htmlFor="whatisit" className="col-sm-12 col-form-label">
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
              <label htmlFor="madefrom" className="col-form-label col-sm-12">
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
              <label htmlFor="weight" className="col-form-label  col-sm-12">
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
              <label
                htmlFor="contaminants"
                className="col-form-label  col-sm-12"
              >
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
              <div className="col-sm-10">
                <button className="btn btn-primary" type="submit">
                  Submit Your Quote Request
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
