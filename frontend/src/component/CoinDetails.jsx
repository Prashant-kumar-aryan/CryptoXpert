import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import { useParams } from 'react-router-dom';
import { data } from "./bitcoin"

import { BarChart } from '@mui/x-charts/BarChart';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import RedditIcon from '@mui/icons-material/Reddit';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';

const CoinDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");

  const [price, setPrice] = useState([]);


  const handleCurrencyChange = (selectedCurrency) => {
    setCurrency(selectedCurrency);
    setLoading(true);
  }

  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  useEffect(() => {
    const fetchCoinDetail = async () => {
      try {
        // https://api.coingecko.com/api/v3/coins/${id}
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`, { method: "GET" });
        const data = await response.json();
        console.log(data, "lol");
        setLoading(false);

        const costo = data.market_data.current_price.usd;

        const temp = [
          costo,
          costo + (costo * data.market_data.price_change_percentage_1h_in_currency.usd) / 100,
          costo + (costo * data.market_data.price_change_percentage_24h) / 100,
          costo + (costo * data.market_data.price_change_percentage_7d) / 100,
          costo + (costo * data.market_data.price_change_percentage_14d) / 100,
          costo + (costo * data.market_data.price_change_percentage_30d) / 100,
          costo + (costo * data.market_data.price_change_percentage_60d) / 100,
          costo + (costo * data.market_data.price_change_percentage_200d) / 100,
          costo + (costo * data.market_data.price_change_percentage_1y) / 100,
        ]
        setPrice(temp);
        console.log(temp);
        console.log(price);

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
        <div style={{
          paddingLeft: "7%",
          paddingTop: "20px",
        }}>
          <div style={{
            display: "flex",
            flexDirection: "row",

          }}>
            <img style={{}} src={`${data.image.small}`} alt="Description of image" />
            <h1 style={{ flex: 1, margin: "auto" }}>
              {data.name}
            </h1>
          </div>
          <h5 style={{
            margin: 25,
            display: '-webkit-box',
            WebkitLineClamp: '4',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {data.description.en}
          </h5>
          <div style={{ display: "flex", }}>

            <div style={{ backgroundColor: "wheat", flex: 2 }} >
              {
                price.length > 0 ?
                  <ScatterChart
                    style={{
                      paddingLeft: "10px"
                    }}
                    width={600}
                    height={300}
                    series={
                      [
                        {
                          label: 'Series A',
                          data: price.map((v, index) => ({ y: v, x: index })),
                        },

                      ]}
                  />
                  : <Loader />
              }
            </div>
            <div style={{ flex: 1 }}>
              <h1>Socials</h1>
              <div style={{ display: "flex", flexDirection: "row", width: "50%", justifyContent: "space-between", flexWrap: "wrap" }}>
                <RedditIcon fontSize='medium' style={{ width: "50%" }} />
                <XIcon fontSize='medium' style={{ width: "50%" }} />
                <FacebookIcon fontSize='medium' style={{ width: "50%" }} />
              </div>

            </div>
          </div>

        </div>
      )}
    </div>
  );
}

export default CoinDetails

