import React, {Component} from 'react';

const faqs = [
  {
    q: 'What should I do, if I am not able to send an email?',
    a:
      'You can call us on +91 1234456789 to place a request on your behalf. Also, you can send all the required details in email indoorsale0@gmail.com. We will get back to you in 2 business days.',
  },
  {
    q: 'What is the customer service working time?',
    a: 'You can call us on the above number Mon-Fri 8AM to 5PM IST.',
  },
  {
    q: 'How many days it will take to scrap my product on the request?',
    a:
      'Once the request is placed, within 2 business days, our agent will come and pick up the scrap at your place and processed in a week.',
  },
];
export default class FAQComponent extends Component {
  render() {
    return (
      <>
        <br />
        <br />
        <h3>FAQ's: </h3>
        <br />
        <div className="accordion" id="accordionExample">
          {faqs.map((faq, i) => (
            <div className="card">
              <div className="card-header" id={`b${i}`}>
                <h2 className="mb-0">
                  <button
                    className="btn btn-link btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target={`#a${i}`}
                    aria-expanded="true"
                    aria-controls={`a${i}`}
                  >
                    {faq.q}
                  </button>
                </h2>
              </div>

              <div
                id={`a${i}`}
                className="collapse show"
                aria-labelledby={`b${i}`}
                data-parent="#accordionExample"
              >
                <div className="card-body">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
