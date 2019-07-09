import React, {Component} from 'react';
import '../../styles/stylesheets/Support.css';
import { Header, Paragraph } from '../common';

class Support extends Component {
  constructor() {
    super();
    this.state = {
      elements: [
        'Receipt, storage and management of inbound supplier inventory at a nearby inbound logistics supplier hub. New Breed specializes in complex inbound logistics projects. We manage more than 37,000 SKUs as part of a manufacturing logistics solution for Boeing.',
        'Vendor managed inventory service. Our custom vendor managed inventory software is used to manage VMI projects in the aerospace sector.',
        'Kitting and sub-assembly.',
        'JIT delivery to manufacturing line - sequencing.'
      ],
      benefits: [
        'Maximize production space by storing materials off site.',
        'Speed production by receiving materials as needed and in ready condition.',
        'Postpone inventory ownership and improve cash flow (vendor managed inventory).',
        'Increase inventory turns through carefully managed replenishment processes.'
      ]
    };
  }
  render() {
    return (
      <div className='support'>
        <Header text='Support'/>
        <p>
          Today’s lean supply chains demand reliable, efficient delivery of components to the manufacturing line. Futura inbound logistics solution has been proven to decrease costs and increase manufacturing production in aerospace logistics and other industries.
        </p>
        <div className='information'>
          <div className='elements'>
            <h3>Elements</h3>
            <Paragraph text={this.state.elements}/>
          </div>
          <div className='benefits'>
            <h3>Benefits</h3>
            <Paragraph text={this.state.benefits}/>
          </div>
        </div>
        <p>
          Need inbound logistics support for manufacturing? Contact us to discuss how our inbound logistics services can streamline your manufacturing logistics process.
        </p>
        <a href='/'>CONTACT</a>
      </div>
    );
  }
}

export { Support };
