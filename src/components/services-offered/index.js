import React, {Component} from 'react';
import './index.css';

const items = [
  {key: 'Aluminium Accessories scrap', value: '	93,000'},
  {key: 'Aluminium Cable scrap ', value: '	0'},
  {key: 'Aluminium ingots', value: '	150,000'},
  {key: 'Aluminium Rod Company', value: '	147,000'},
  {key: 'Aluminium Rod Local', value: '	140,000'},
  {key: 'Aluminium scrap 6063', value: '	0'},
  {key: 'Aluminium scrap Taint/Tabor', value: '	0'},
  {key: 'Aluminium Sheet cutting', value: '	134,000'},
  {key: 'Aluminium utensil scrap', value: '	122,000'},
  {key: 'Aluminium Wire Scrap', value: '	138,000'},
  {key: 'Brass Accessories', value: '	317,500'},
  {key: 'Brass huny Scrap', value: '	326,200'},
  {key: 'Brass Pales scrap', value: '	0'},
  {key: 'Brass Pallu scrap', value: '	0'},
  {key: 'Brass sheet cuttings', value: '	0'},
  {key: 'Brass Sheet scrap', value: '	0'},
  {key: 'Brass Shell 40mm', value: '	0'},
  {key: 'Brass utensil scrap', value: '	0'},
  {key: 'ACR Copper Coil 3/8', value: '	0'},
  {key: 'CC Rod LME ++', value: '	0'},
  {key: 'Copper armature', value: '	0'},
  {key: 'Copper cable scrap', value: '	0'},
  {key: 'Copper cathod LME ++', value: '	0'},
  {key: 'Copper heavy scrap', value: '	0'},
  {key: 'Copper Mixed Scrap', value: '	418,100'},
  {key: 'Copper Pat', value: '	438,200'},
  {key: 'Copper shell 40mm', value: '	0'},
  {key: 'Copper Super D.Rod', value: '	468,100'},
  {key: 'Copper utensil scrap', value: '	0'},
  {key: 'Copper wire bars', value: '	0'},
  {key: 'Copper Wire Scrap', value: '	443,500'},
  {key: 'Electrolytic Copper strip 25mm', value: '	0'},
  {key: 'Nickel Cathode', value: '	0'},
  {key: 'Nickel Plate(4x24)', value: '	950,000'},
  {key: 'Nickel Plate(9x9)', value: '	955,000'},
  {key: 'Nickel Russian(4x4)', value: '	935,000'},
  {key: 'Antimony China', value: '	605,000'},
  {key: 'Cadmium Plate', value: '	260,000'},
  {key: 'Cadmium Rod', value: '	247,000'},
  {key: 'Gun Metal Scrap Jalandhar', value: '	355,000'},
  {key: 'Gun Metal Scrap Local', value: '	344,000'},
  {key: 'Gun Metal Scrap Mix', value: '	348,000'},
  {key: 'Inco Canada', value: '	1,250,000'},
  {key: 'ABS(bayr)', value: '	127,000'},
  {key: 'Acrylic', value: '	127,000'},
  {key: 'API', value: '	134,000'},
  {key: 'C.P.W', value: '	41,000'},
  {key: 'HD Blowing', value: '	84,000'},
  {key: 'HD Moulding(Colour)', value: '	98,000'},
  {key: 'Hips(Baff)', value: '	99,000'},
  {key: 'LLDP Blowing', value: '	102,000'},
  {key: 'PVC pest grade', value: '	92,000'},
  {key: 'PVC resin desi', value: '	73,000'},
  {key: '#1/#2 HMS 80/20', value: '	24,800'},
  {key: 'Tin ingots', value: '	1,400,000'},
  {key: 'Tin slab', value: '	0'},
  {key: 'Lead Ingo Desi Soft', value: '	160,000'},
  {key: 'Lead ingots', value: '	154,000'},
  {key: 'Zinc Dross', value: '	193,000'},
  {key: 'Zinc slab', value: '	200,000'},
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
            {items.map((item) => (
              <tr scope="row">
                <td>{item.key}</td>
                <td>{item.value}&nbsp;&nbsp;<a href="/makeanoffer" className="badge badge-info pad-right">Quote</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
