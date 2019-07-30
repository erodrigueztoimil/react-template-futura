import React, { Component } from 'react';
import '../../styles/css/Services.css';
import { Service } from '../common';

class Services extends Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    return (
      <div className='services'>
        <Service
          heading='air'
          body='We manage the entire service management, from the pickup at your supplier-manufacturer-distributor Local-State-national, storage, customs documentation for export-import, process control through the tracking number of shipments, including delivery at destination. We work with large commercial operators leading hundreds of routes and large volumes of cargo space available which generates our customers achieve competitive pricing and availability of space for loading.'
        />
        <Service
          heading='sea'
          body='In our shipping services offer a variety of flexible options, lower volume capacity loads a full container (LOL), full container loads (FCL) and split shipments or shipments different loads. We also offer shipping documentation for export, customs documentation in source and destination.'
        />
        <Service
          heading='terrestial'
          body='Our logistics system uses a network of specialized operators which facilitates and manages more flexibility, control and choice to our customers. Besides our own truck fleet services, we work with independent companies, highly professional where we group combined volumes to destinations where our fleet misses and together we achieve more competitive prices for our customers.'
        />
      </div>
    );
  }
}

export { Services };
