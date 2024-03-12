import React, { useEffect, useState } from 'react'
// import { Box, Container } from '@chakra-ui/react'
import Loader from './Loader';
//import axios from 'axios';
import ErrorComponent from './ErrorComponent';
import { useParams } from 'react-router-dom';
// import { ChakraProvider, theme } from "@chakra-ui/react";
import { data } from "./bitcoin"
const CoinDetails = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");

  const handleCurrencyChange = (selectedCurrency) => {
    setCurrency(selectedCurrency);
    setLoading(true);
  }
  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  useEffect(() => {
    const fetchCoinDetail = async () => {
      try {
        //const {data}= await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
        console.log(data);
        setCoin(data);
        setLoading(false);
      }
      catch {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoinDetail();
  }, [id])
  if (error) return <ErrorComponent message={"API Call Limit Excedded Try again after some time"} />
  return (
    <div maxW={"container.x1"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* <Box width={"full"} borderWidth={1}>
            PRASHANT
          </Box> */}
          <div className="dropdown">
            <button className="dropdown-btn">Select Currency</button>
            <div className="dropdown-content">
              <button onClick={() => handleCurrencyChange("inr")}>INR</button>
              <button onClick={() => handleCurrencyChange("eur")}>EUR</button>
              <button onClick={() => handleCurrencyChange("usd")}>USD</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CoinDetails

