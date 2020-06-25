import React, {Component} from 'react';
import './index.css';
import Modal from '../common/modal';
import {MDBTable, MDBTableBody, MDBTableHead} from 'mdbreact';

const items = [
  {item: 'Aluminium Accessories scrap', price: 93000},
  {item: 'Aluminium Cable scrap ', price: 0},
  {item: 'Aluminium ingots', price: 150000},
  {item: 'Aluminium Rod Company', price: 147000},
  {item: 'Aluminium Rod Local', price: 140000},
  {item: 'Aluminium scrap 6063', price: 0},
  {item: 'Aluminium scrap Taint/Tabor', price: 0},
  {item: 'Aluminium Sheet cutting', price: 134000},
  {item: 'Aluminium utensil scrap', price: 122000},
  {item: 'Aluminium Wire Scrap', price: 138000},
  {item: 'Brass Accessories', price: 317500},
  {item: 'Brass huny Scrap', price: 326200},
  {item: 'Brass Pales scrap', price: 0},
  {item: 'Brass Pallu scrap', price: 0},
  {item: 'Brass sheet cuttings', price: 0},
  {item: 'Brass Sheet scrap', price: 0},
  {item: 'Brass Shell 40mm', price: 0},
  {item: 'Brass utensil scrap', price: 0},
  {item: 'ACR Copper Coil 3/8', price: 0},
  {item: 'CC Rod LME ++', price: 0},
  {item: 'Copper armature', price: 0},
  {item: 'Copper cable scrap', price: 0},
  {item: 'Copper cathod LME ++', price: 0},
  {item: 'Copper heavy scrap', price: 0},
  {item: 'Copper Mixed Scrap', price: 418100},
  {item: 'Copper Pat', price: 438200},
  {item: 'Copper shell 40mm', price: 0},
  {item: 'Copper Super D.Rod', price: 468100},
  {item: 'Copper utensil scrap', price: 0},
  {item: 'Copper wire bars', price: 0},
  {item: 'Copper Wire Scrap', price: 443500},
  {item: 'Electrolytic Copper strip 25mm', price: 0},
  {item: 'Nickel Cathode', price: 0},
  {item: 'Nickel Plate(4x24)', price: 950000},
  {item: 'Nickel Plate(9x9)', price: 955000},
  {item: 'Nickel Russian(4x4)', price: 935000},
  {item: 'Antimony China', price: 605000},
  {item: 'Cadmium Plate', price: 260000},
  {item: 'Cadmium Rod', price: 247000},
  {item: 'Gun Metal Scrap Jalandhar', price: 355000},
  {item: 'Gun Metal Scrap Local', price: 344000},
  {item: 'Gun Metal Scrap Mix', price: 348000},
  {item: 'Inco Canada', price: 1250000},
  {item: 'ABS(bayr)', price: 127000},
  {item: 'Acrylic', price: 127000},
  {item: 'API', price: 134000},
  {item: 'C.P.W', price: 41000},
  {item: 'HD Blowing', price: 84000},
  {item: 'HD Moulding(Colour)', price: 98000},
  {item: 'Hips(Baff)', price: 99000},
  {item: 'LLDP Blowing', price: 102000},
  {item: 'PVC pest grade', price: 92000},
  {item: 'PVC resin desi', price: 73000},
  {item: '#1/#2 HMS 80/20', price: 24800},
  {item: 'Tin ingots', price: 1400000},
  {item: 'Tin slab', price: 0},
  {item: 'Lead Ingo Desi Soft', price: 160000},
  {item: 'Lead ingots', price: 154000},
  {item: 'Zinc Dross', price: 193000},
  {item: 'Zinc slab', price: 200000},
];

export default class ServicesOfferedComponent extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    items.forEach(
      (obj, i) =>
        (obj.handle = (
          <Modal data={obj} key={i} rowIndex={`a${i}`} title="Calculate Cost" />
        ))
    );
    this.columns = [
      {
        label: 'Item',
        field: 'item',
        sort: 'asc',
        width: 300,
      },
      {
        label: 'Price',
        field: 'price',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'Handle',
        field: 'handle',
        sort: 'asc',
        width: 200,
      },
    ];
    this.rows = items;
  }

  render() {
    return (
      <div className="row ml-5 pt-md-5 mb-5">
        <div className="col-lg-xl">
          <br />
          <br />
          <h3>Services Offered and Pricing:</h3>
          <br />
          <MDBTable hover autoWidth fixed btn stripped responsiveLg>
            <MDBTableHead columns={this.columns} />
            <MDBTableBody rows={this.rows} />
          </MDBTable>
        </div>
      </div>
    );
  }
}
