import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({
  id,
  name,
  price,
  imgSrc,
  symbol,
  currencySymbol = "₹",
}) => {
  return (
    <Link
      to={`/coins/${id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="coin">
        <img src={imgSrc} alt={name} />
        <h2>{name}</h2>
        <p>{symbol}</p>
        <h4>₹{price ? `${(currencySymbol, price)}` : "NA"}</h4>
      </div>
    </Link>
  );
};

export default CoinCard;
