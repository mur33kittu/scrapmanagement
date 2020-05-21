import React, {Component} from 'react';
import scrap1 from '../../assets/scrap1.png';
import scrap2 from '../../assets/a2.jpg';
import scrap3 from '../../assets/a3.jpg';
import {withRouter} from 'react-router-dom';

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.makeAnOffer = this.makeAnOffer.bind(this);
  }

  makeAnOffer() {
    this.props.history.push('/makeanoffer');
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
              />
            </div>
            <div className="col-sm-6">
              <button
                type="button"
                className="btn btn-lg"
                style={{
                  width: '500px',
                  fontSize: 24,
                  border: '1px groove red',
                  padding: '20px',
                  margin: '20%',
                }}
                onClick={this.makeAnOffer}
              >
                Get your Scrap Management Offer Today
              </button>
            </div>
          </div>
        </div>
        <div class="d-flex bd-highlight">
          <div class="p-2 flex-fill bd-highlight">
            <div class="card">
              <div class="card-body">
                <p class="card-text">
                  <button className="btn btn-primary btn-lg" type="button">
                    View FAQ's
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div class="p-2 flex-fill bd-highlight">
            <div class="card">
              <div class="card-body">
                <p class="card-text">
                  <button className="btn btn-secondary btn-lg" type="button">
                    Click to View Images
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div class="p-2 flex-fill bd-highlight">
            <div class="card">
              <div class="card-body">
                <p class="card-text">
                  <button className="btn btn-info btn-lg" type="button">
                    View Spec Sheets
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex bd-highlight">
          <div class="p-2 flex-fill bd-highlight">
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
          <div class="p-2 flex-fill bd-highlight">
            <div
              id="carouselExampleSlidesOnly"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src={scrap2} alt="First slide" />
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src={scrap3} alt="Second slide" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3>Our Company Values</h3>

        <div class="d-flex bd-highlight">
          <div class="p-2 flex-fill bd-highlight">
            <p className="lead">Serving the Environment</p>
            <p className="lead">Invest in People</p>
            <p className="lead">Gurantee the Customer</p>
            <p className="lead">Provide exceptional service</p>
            <p className="lead">Work as a Team</p>
            <p className="lead">Deliver Value</p>
          </div>
        </div>
        ©2018 scrapit.com – All rights reserved – Terms and Conditions: Sales | Purchase Orders
      </>
    );
  }
}

export default withRouter(HomeComponent);
