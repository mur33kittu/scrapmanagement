import React, {Component} from 'react';
import scrap1 from '../../assets/scrap1.png';
import scrap2 from '../../assets/a2.jpg';
import scrap3 from '../../assets/a3.jpg';
import envira from '../../assets/envira.svg';
import smile from '../../assets/smile.svg';
import people from '../../assets/people-carry.svg';
import users from '../../assets/users.svg';
import truck from '../../assets/truck.svg';
import service from '../../assets/servicestack.svg';

import {withRouter} from 'react-router-dom';

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.makeAnOffer = this.makeAnOffer.bind(this);
    this.goFaq = this.goFaq.bind(this);
    this.goSpec = this.goSpec.bind(this);
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
  render() {
    return (
      <>
        <div className="jumbotron">
          <div className="row">
            <div className="col-sm-6">
              <img
                src={scrap1}
                className="img-rounded"
                alt="Responsive Image"
                style={{width: '100%'}}
              />
            </div>
            <div className="col-sm-6">
              <button
                type="button"
                className="btn btn-lg"
                style={{
                  width: '80%',
                  fontSize: 24,
                  border: '1px groove red',
                  padding: 'auto',
                  margin: 'auto',
                }}
                onClick={this.makeAnOffer}
              >
                Get your Scrap Management Offer Today
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  <button
                    className="btn btn-primary btn-lg"
                    type="button"
                    onClick={this.goFaq}
                  >
                    View FAQ's
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  <button className="btn btn-secondary btn-lg" type="button">
                    Click to View Images
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  <button
                    className="btn btn-info btn-lg"
                    type="button"
                    onClick={this.goSpec}
                  >
                    View Spec Sheets
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <p className="lead">
              We envision a cleaner and greener world in which waste is properly
              recycled. Therefore, we strive to turn our waste stream into a
              usable resource.
            </p>
            <p className="lead">
              {' '}
              Scrap Management partners with recycling companies in order to
              meet and surpass their waste disposal needs. In addition, we
              create programs for businesses that historically have not recycled
              effectively. This improves recovery rates and increases the bottom
              line for our clients.
            </p>
            <p className="lead">
              {' '}
              Working with Scrap Management, you can expect us to be down to
              earth, reliable, trustworthy, and resourceful. Our team uses the
              most cutting edge technology/techniques to guarantee the success
              of your recycling program. We pride ourselves in our service which
              makes your job simple and profitable. Exceeding expectations and
              earning your loyal business is our #1 goal.
            </p>
          </div>
          <div className="col-sm-6">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src={scrap2}
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={scrap3}
                    alt="Second slide"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <h3>Our Company Values</h3>
        <div className="row">
          <div className="col-sm-2">
            <img
              src={envira}
              alt="environment"
              style={{width: '75px', height: '75px'}}
            />
            <p className="lead">Serving the Environment</p>
          </div>
          <div className="col-sm-2">
            <img
              src={people}
              alt="people"
              style={{width: '75px', height: '75px'}}
            />
            <p className="lead">Invest in People</p>
          </div>
          <div className="col-sm-2">
            <img
              src={smile}
              alt="smile"
              style={{width: '75px', height: '75px'}}
            />
            <p className="lead">Gurantee the Customer</p>
          </div>
          <div className="col-sm-2">
            <img
              src={service}
              alt="service"
              style={{width: '75px', height: '75px'}}
            />
            <p className="lead">Provide exceptional service</p>
          </div>
          <div className="col-sm-2">
            <img
              src={users}
              alt="users"
              style={{width: '75px', height: '75px'}}
            />
            <p className="lead">Work as a Team</p>
          </div>
          <div className="col-sm-2">
            <img
              src={truck}
              alt="truck"
              style={{width: '75px', height: '75px'}}
            />
            <p className="lead">Deliver Value</p>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(HomeComponent);
