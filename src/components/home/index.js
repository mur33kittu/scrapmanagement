import React, {Component} from 'react';
// import scrap1 from '../../assets/scrap1.png';
// import scrap2 from '../../assets/a2.jpg';
import scrap3 from '../../assets/a3.jpg';
// import envira from '../../assets/envira.svg';
// import smile from '../../assets/smile.svg';
// import people from '../../assets/people-carry.svg';
// import users from '../../assets/users.svg';
// import truck from '../../assets/truck.svg';
// import service from '../../assets/servicestack.svg';
import './index.css';

import {withRouter} from 'react-router-dom';

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.makeAnOffer = this.makeAnOffer.bind(this);
    this.goFaq = this.goFaq.bind(this);
    this.goSpec = this.goSpec.bind(this);
    this.goServicesAndPricing = this.goServicesAndPricing.bind(this);
  }

  makeAnOffer() {
    this.props.history.push('/makeanoffer');
  }

  goFaq() {
    this.props.history.push('/faq');
  }
  goSpec() {
    this.props.history.push('/spec');
  }
  goServicesAndPricing() {
    this.props.history.push('/services');
  }
  render() {
    return (
      <>
        <div className="row mt-5 pt-5">
          <div className="col text-center">
            <div className="card card-image">
              <div className="text-white text-center rgba-stylish-strong py-5 px-4">
                <div className="py-5">
                  <h5 className="h5 orange-text">
                    <i className="fas fa-camera-retro"></i> Scrap Anything
                  </h5>

                  <p className="mb-4 pb-2 px-md-5 mx-md-5">
                    Please use the below button to request for scrap request
                  </p>
                  <a className="btn peach-gradient" onClick={this.makeAnOffer}>
                    <i className="fas fa-clone left"></i> Get your Scrap
                    Management Offer Today
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row px-1 pt-5">
          <div className="col-md-3">
            <div className="card card-image">
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                <div>
                  <h5 className="pink-text">
                    <i className="fas fa-chart-pie"></i> Faq's
                  </h5>
                  <h3 className="card-title pt-2">
                    <strong>View FAQ</strong>
                  </h3>
                  <p>Use the below link to frequently asked questions</p>
                  <a className="btn btn-pink" onClick={this.goFaq}>
                    <i className="fas fa-clone left"></i> View FAQ
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card card-image">
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                <div>
                  <h5 className="pink-text">
                    <i className="fas fa-chart-pie"></i> Pricing
                  </h5>
                  <h3 className="card-title pt-2">
                    <strong>View Pricing for all the scraps here</strong>
                  </h3>
                  <p>
                    Use below link to check the current price for the scraps
                    requested
                  </p>
                  <a
                    className="btn btn-pink"
                    onClick={this.goServicesAndPricing}
                  >
                    <i className="fas fa-clone left"></i> Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card card-image">
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                <div>
                  <h5 className="pink-text">
                    <i className="fas fa-chart-pie"></i> Spec Sheets
                  </h5>
                  <h3 className="card-title pt-2">
                    <strong>Coming Soon</strong>
                  </h3>
                  <p>No data yet</p>
                  <a className="btn btn-pink" onClick={this.goSpec}>
                    <i className="fas fa-clone left"></i> Spec Sheets
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row ml-5 pt-5 mb-5">
          <div className="col-md-3">
            <div
              id="carousel-example-2"
              className="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carousel-example-2"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#carousel-example-2" data-slide-to="1"></li>
                <li data-target="#carousel-example-2" data-slide-to="2"></li>
              </ol>

              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <div className="view">
                    <img
                      className="img-thumbnail"
                      style={{width: '100%'}}
                      src={scrap3}
                      alt="First slide"
                    />
                    <div className="mask rgba-black-light"></div>
                  </div>
                  <div className="carousel-caption">
                    <h3 className="h3-responsive">Light mask</h3>
                    <p>First text</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="view">
                    <img
                      className="img-thumbnail"
                      src={scrap3}
                      alt="Second slide"
                      style={{width: '100%'}}
                    />
                    <div className="mask rgba-black-strong"></div>
                  </div>
                  <div className="carousel-caption">
                    <h3 className="h3-responsive">Strong mask</h3>
                    <p>Secondary text</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="view">
                    <img
                      className="img-thumbnail"
                      style={{width: '100%'}}
                      src={scrap3}
                      alt="Third slide"
                    />
                    <div className="mask rgba-black-slight"></div>
                  </div>
                  <div className="carousel-caption">
                    <h3 className="h3-responsive">Slight mask</h3>
                    <p>Third text</p>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carousel-example-2"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carousel-example-2"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(HomeComponent);
