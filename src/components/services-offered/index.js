import React, {Component} from 'react';
import './index.css';
import Modal from '../common/modal';

const items = [
  {key: 'Aluminium Accessories scrap', value: 93000},
  {key: 'Aluminium Cable scrap ', value: 0},
  {key: 'Aluminium ingots', value: 150000},
  {key: 'Aluminium Rod Company', value: 147000},
  {key: 'Aluminium Rod Local', value: 140000},
  {key: 'Aluminium scrap 6063', value: 0},
  {key: 'Aluminium scrap Taint/Tabor', value: 0},
  {key: 'Aluminium Sheet cutting', value: 134000},
  {key: 'Aluminium utensil scrap', value: 122000},
  {key: 'Aluminium Wire Scrap', value: 138000},
  {key: 'Brass Accessories', value: 317500},
  {key: 'Brass huny Scrap', value: 326200},
  {key: 'Brass Pales scrap', value: 0},
  {key: 'Brass Pallu scrap', value: 0},
  {key: 'Brass sheet cuttings', value: 0},
  {key: 'Brass Sheet scrap', value: 0},
  {key: 'Brass Shell 40mm', value: 0},
  {key: 'Brass utensil scrap', value: 0},
  {key: 'ACR Copper Coil 3/8', value: 0},
  {key: 'CC Rod LME ++', value: 0},
  {key: 'Copper armature', value: 0},
  {key: 'Copper cable scrap', value: 0},
  {key: 'Copper cathod LME ++', value: 0},
  {key: 'Copper heavy scrap', value: 0},
  {key: 'Copper Mixed Scrap', value: 418100},
  {key: 'Copper Pat', value: 438200},
  {key: 'Copper shell 40mm', value: 0},
  {key: 'Copper Super D.Rod', value: 468100},
  {key: 'Copper utensil scrap', value: 0},
  {key: 'Copper wire bars', value: 0},
  {key: 'Copper Wire Scrap', value: 443500},
  {key: 'Electrolytic Copper strip 25mm', value: 0},
  {key: 'Nickel Cathode', value: 0},
  {key: 'Nickel Plate(4x24)', value: 950000},
  {key: 'Nickel Plate(9x9)', value: 955000},
  {key: 'Nickel Russian(4x4)', value: 935000},
  {key: 'Antimony China', value: 605000},
  {key: 'Cadmium Plate', value: 260000},
  {key: 'Cadmium Rod', value: 247000},
  {key: 'Gun Metal Scrap Jalandhar', value: 355000},
  {key: 'Gun Metal Scrap Local', value: 344000},
  {key: 'Gun Metal Scrap Mix', value: 348000},
  {key: 'Inco Canada', value: 1250000},
  {key: 'ABS(bayr)', value: 127000},
  {key: 'Acrylic', value: 127000},
  {key: 'API', value: 134000},
  {key: 'C.P.W', value: 41000},
  {key: 'HD Blowing', value: 84000},
  {key: 'HD Moulding(Colour)', value: 98000},
  {key: 'Hips(Baff)', value: 99000},
  {key: 'LLDP Blowing', value: 102000},
  {key: 'PVC pest grade', value: 92000},
  {key: 'PVC resin desi', value: 73000},
  {key: '#1/#2 HMS 80/20', value: 24800},
  {key: 'Tin ingots', value: 1400000},
  {key: 'Tin slab', value: 0},
  {key: 'Lead Ingo Desi Soft', value: 160000},
  {key: 'Lead ingots', value: 154000},
  {key: 'Zinc Dross', value: 193000},
  {key: 'Zinc slab', value: 200000},
];
export default class ServicesOfferedComponent extends Component {
  render() {
    return (
      <>
        <br />
        <br />
        <h3>Services Offered and Pricing:</h3>
        <p className="lead">
          Below are the services offered by Us and Pricing list available
        </p>
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr>
                <td>{item.key}</td>
                <td>
                  {item.value}&nbsp;&nbsp;
                  <Modal title="Quote" class="badge badge-info pad-right" data={item} key={i} rowIndex={`a${i}`} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
