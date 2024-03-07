import React from 'react'
import { Link } from 'react-router-dom'

const CoinCard = ({id,
        name,
        price,
        imgSrc,
        symbol, 
        currencySymbol="₹"}) => {
  return (
    <Link to={`/coin/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
    <div className='coin'>
      <img src ={imgSrc} alt={name} />
      <h1>{name}</h1>
      <p>{symbol}</p>
      <h4>₹{price? `${currencySymbol , price}`:"NA"}</h4>
    </div>
    </Link>
  )
}

export default CoinCard
