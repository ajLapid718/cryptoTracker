import React, { Component } from 'react';
import './Cryptocurrency.css';

class Cryptocurrency extends Component {
  render() {
    const { id, name, symbol, price_usd, percent_change_1h, percent_change_24h, percent_change_7d } = this.props.data;
  }
}

export default Cryptocurrency;
