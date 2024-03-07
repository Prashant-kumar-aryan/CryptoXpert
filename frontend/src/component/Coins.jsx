import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import CoinCard from './CoinCard.jsx';
import Loader from "./Loader.jsx";
import ErrorComponent from './ErrorComponent.jsx';
import data from './temp';

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [page, setPage] = useState(1);

  const prevPage = () => {
    if (page <= 1) return;
    setPage(page - 1);
    setLoading(true);
  }

  const nextPage = () => {
    setPage(page + 1);
    setLoading(true);
  }

  const handleCurrencyChange = (selectedCurrency) => {
    setCurrency(selectedCurrency);
    setPage(1);
    setLoading(true);
  }

  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  useEffect(() => {
    const fetchAllCoins = async () => {
      try {
        //const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&per_page=12&page=${page}`);
        console.log(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&per_page=12&page=${page}`)
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.error("Error fetching data:", error);
      }
    };
    fetchAllCoins();
  }, [currency, page,loading]);

  if (error) return <ErrorComponent message={"Error in API call for Coins"} />;

  return (
    loading ? <Loader /> : (
      <>
        <div className="dropdown">
          <button className="dropdown-btn">Select Currency</button>
          <div className="dropdown-content">
            <button onClick={() => handleCurrencyChange("inr")}>INR</button>
            <button onClick={() => handleCurrencyChange("eur")}>EUR</button>
            <button onClick={() => handleCurrencyChange("usd")}>USD</button>
          </div>
        </div>
        <div className='CoinContainer'>
          {coins.map((i) => (
            <CoinCard
              id={i.id}
              key={i.id}
              name={i.name}
              price={i.current_price}
              imgSrc={i.image}
              symbol={i.symbol}
              currencySymbol={currencySymbol}
            />
          ))}
          <div className='pagecontainer'>
            <button className="pagebutton" onClick={prevPage}>Prev</button>
            <p>{page}</p>
            <button className="pagebutton" onClick={nextPage}>Next</button>
          </div>
        </div>
      </>
    )
  );
}

export default Coins;
