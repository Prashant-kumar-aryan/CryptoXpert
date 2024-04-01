import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import { useParams } from 'react-router-dom';
import { Scatter } from 'react-chartjs-2';


import { ScatterChart } from '@mui/x-charts/ScatterChart';
import RedditIcon from '@mui/icons-material/Reddit';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';


const CoinDetails2 = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [price, setPrice] = useState([]);
  const [datam, setDatam] = useState(null);

  const options = {
    scales: {
      x: {
        type: 'linear',
        title: {
          display: true,
          text: 'Time'
        }
      },
      y: {
        type: 'linear',
        title: {
          display: true,
          text: 'Price'
        }
      }
    }
  };



  useEffect(() => {
    const fetchCoinDetail = async () => {
      try {
        // https://api.coingecko.com/api/v3/coins/${id}
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`, { method: "GET" });
        const data1 = await response.json();
        setDatam(data1)
        console.log("....")

        const costo = data1.market_data.current_price.usd;

        const temp = [
          costo,
          costo + (costo * data1.market_data.price_change_percentage_1h_in_currency.usd) / 100,
          costo + (costo * data1.market_data.price_change_percentage_24h) / 100,
          costo + (costo * data1.market_data.price_change_percentage_7d) / 100,
          costo + (costo * data1.market_data.price_change_percentage_14d) / 100,
          costo + (costo * data1.market_data.price_change_percentage_30d) / 100,
          costo + (costo * data1.market_data.price_change_percentage_60d) / 100,
          costo + (costo * data1.market_data.price_change_percentage_200d) / 100,
          costo + (costo * data1.market_data.price_change_percentage_1y) / 100,
        ]
        setPrice(temp);
        console.log(temp);
        console.log(price);

        setData({
          datasets: [{
            label: 'Crypto Plot',
            data: price.map((v, index) => ({ y: v, x: index })),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          }],
        })

      }
      catch (err) {
        setError(err);
        setLoading(false);
      }

      setLoading(false);
    };
    fetchCoinDetail();
  }, [id])

  if (error) {
    console.log(error);
    return <ErrorComponent message={"API Call Limit Excedded Try again after some time"} />
  }

  return (
    <div maxW={"container.x1"} style={{ backgroundColor: "gray" }}>
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
            <img style={{}} src={`${datam.image.small}`} alt="Description of image" />
            <h1 style={{ flex: 1, margin: "auto" }}>
              {datam.name}
            </h1>
          </div>
          <h5 style={{
            margin: 25,
            display: '-webkit-box',
            WebkitLineClamp: '4',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {datam.description.en}
          </h5>
          <div style={{ display: "flex", }}>

            <div style={{ backgroundColor: "white", flex: 2 }} >
              {
                price.length > 0 &&
                <Scatter data={data} options={options} />

                // <ScatterChart
                //   style={{
                //     paddingLeft: "10px",
                //     color: "white"
                //   }}
                //   width={600}
                //   height={300}
                //   series={
                //     [
                //       {
                //         label: 'Series A',
                //         data: price.map((v, index) => ({ y: v, x: index })),
                //         color: '#00FF40'
                //       },

                //     ]}
                // />
              }
            </div>
            <div style={{ flex: 1, borderRadius: "10%", backgroundColor: "GrayText", padding: "10px  " }}>
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

export default CoinDetails2

