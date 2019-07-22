import React, {Component} from 'react';

class Links extends Component {
  constructor() {
    super();

    this.state = {
      items: [
        'Home',
        'About',
        'Services',
        'Contact'
      ]
    }
  }

  render() {
    let links = this.state.items.map((page, key) => {
      return (
        <li key={key}><a href='/'>{page}</a></li>
      );
    });
    return (
      <ul>
        {links}
      </ul>
    );
  }
}

export { Links };
