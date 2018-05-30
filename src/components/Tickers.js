import React, { Component } from 'react';
import '.Tickers.css';

class Tickers extends Component {
  constructor(props) {
    this.state = {
      data: [
        {
          id: "bitcoin",
          price: "1"
        },
        {
          id: "ethereum",
          price: "1"
        },
        {
          id: "litecoin",
          price: "1"
        }
      ]
    }
  }


}

export default Tickers;
