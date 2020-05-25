import React, {Component} from 'react';

export default class ContactusComponent extends Component {
  constructor() {
    super();
    this.contacts = [
      {
        name: 'ABC Privated Limited 1',
        address: '1234, Vijayanagara, Bangalore.560079',
        phone: '+91 12344564645',
      },
      {
        name: 'ABC Privated Limited 2',
        address: '1234, Vijayanagara, Bangalore.560079',
        phone: '+91 12344564643',
      },
      {
        name: 'ABC Privated Limited 3',
        address: '1234, Vijayanagara, Bangalore.560079',
        phone: '+91 12344564225',
      },
      {
        name: 'ABC Privated Limited 4',
        address: '1234, Vijayanagara, Bangalore.560079',
        phone: '+91 12344564645',
      },
      {
        name: 'ABC Privated Limited 4',
        address: '1234, Vijayanagara, Bangalore.560079',
        phone: '+91 12344564649',
      },
    ];
  }
  render() {
    return (
      <>
        <br />
        <br />
        <p className="h4">Contact Us</p>
        <div className="row align-items-start">
          {this.contacts.map((contact) => (
            <div className="col-lg-4 py-3">
              <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                  <h5 className="card-title">{contact.name}</h5>
                  <p className="card-text">{contact.address}</p>
                  <p className="card-text">{contact.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
