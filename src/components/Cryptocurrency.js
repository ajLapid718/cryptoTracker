import React from 'react';
import './Cryptocurrency.css';

const Cryptocurrency = (props) => {
  const { id, name, symbol, price_usd, percent_change_1h, percent_change_24h, percent_change_7d } = props.data;
  return (
    <li className={"cryptocurrency " + id}>
      <p className="cryptocurrency-name">{name} ({symbol})</p>
      <h1>${Number(price_usd).toFixed(2)}</h1>
      <p>{percent_change_1h}% 1hr</p>
      <p>{percent_change_24h}% 24hrs</p>
      <p>{percent_change_7d}% 7days</p>
    </li>
  )
}

export default Cryptocurrency;
