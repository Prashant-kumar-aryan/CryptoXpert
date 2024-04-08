import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import { useParams } from 'react-router-dom';
// import { data } from './bitcoin'
// import graphData from './graphData.json';
import './CoinDetails.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { VictoryChart, VictoryStack, VictoryArea, VictoryAxis } from 'victory';

const CoinDetails = () => {
  const { id } = useParams();

  const [grp, setGrp] = useState(360);
  const [grpData, setGrpData] = useState([]);
  // const costo = data.market_data.current_price.usd;
  const [loading, setLoading] = useState(false);
  const [val, setVal] = useState(1);
  const [coin, setCoin] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`, { method: "GET" })
      .then(async (res) => {
        console.log(id)
        const coinDate = await res.json();
        setCoin(coinDate);
        console.log(coin);
      })
      .catch(() => {
        setError("Failed to Fetch coin detail")
      })
  }, [])
  // async function fun() {
  //     const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`, { method: "GET" });
  // }
  // fun();


  useEffect(() => {
    setLoading(true)
    fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${grp}`)
      .then(async (res) => {
        if (!res.ok) { // if HTTP status is not OK
          throw Error('Could not fetch the data');
        }
        const data = await res.json();
        const data2 = val === 1 ? await data.prices : val === 2 ? await data.market_caps : await data.total_volumes;
        const data1 = data2.map((item, index) => {
          return { x: index, y: item[1] }
        })
        setGrpData(data1);
        setError(null);
      })
      .catch((error) => {
        // setError(error.message);
        setError("Failed to Fetch data")
      })
      .finally(() => {
        setLoading(false);
      });
  }, [grp, val])

  return (
    <>
      {error && <div>{error}</div>}
      {
        Object.keys(coin).length !== 0
          ? <>
            <div className='Container' style={{ backgroundColor: "#F0F8FF" }}>
              <div className='leftr'>
                <div className='flex-row' style={{ justifyContent: "space-between" }}>
                  <img src={coin.image.small} alt={coin.id} />
                  <div className='flex-row bolder' style={{ fontWeight: "900" }}>
                    <div className='flex-cols cent' style={{ color: '#0C2340', fontSize: "xx-large", fontWeight: "900", fontFamily: "sans-serif" }}>{coin.name}</div>
                    #{coin.market_cap_rank}
                    <div className='flex-cols cent' style={{ fontSize: "large", fontFamily: "sans-serif", fontWeight: "600" }}>{coin.symbol} </div>
                  </div>
                  <div className='flex-row cent' style={{ flexWrap: "wrap" }}>
                    {

                      coin.categories.map((item, index) => index < 3 ? (
                        <div key={index} style={{ fontSize: "small", backgroundColor: "#E0FFFF  ", padding: "3px", margin: "1px", borderRadius: "5px", color: "#0047AB", border: "1px solid #004792" }}>
                          {item}
                        </div>
                      ) : <></>)
                    }
                  </div>
                </div>
                <br />
                <div className='pricer flex-row ' style={{ fontFamily: "sans-serif", fontWeight: "600" }}>
                  ${coin.market_data.current_price.usd}
                  {
                    coin.market_data.price_change_percentage_24h > 0 ?
                      (<div style={{ color: 'green', fontSize: "medium" }} className="flex-rows cent">
                        <ArrowDropUpIcon />
                        {coin.market_data.price_change_percentage_24h.toFixed(1)}
                      </div>)
                      :
                      (<div style={{ color: 'red' }}>
                        <ArrowDropDownIcon style={{}} />
                        {coin.market_data.price_change_percentage_24h.toFixed(1)}
                      </div>)
                  }
                </div>
                <br />

                <div className='flex-row' style={{ width: "62%", alignItems: "center", fontSize: "large", justifyContent: 'space-around' }}>
                  <div> Rating : </div>
                  <ThumbUpIcon style={{ color: "#00e676", }} />{coin.sentiment_votes_up_percentage}
                  <ThumbUpIcon style={{ color: "#ff1744", transform: "rotate(180deg)" }} /> {coin.sentiment_votes_down_percentage}
                </div>
                <br />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', fontSize: "small" }}>
                  <span>low({coin.market_data.low_24h.usd})</span>
                  <span>high({coin.market_data.high_24h.usd})</span>
                </div>
                <div style={{ height: '10px', width: '100%', backgroundColor: '#eee', borderRadius: '10px', display: 'flex' }}>
                  <div style={{
                    height: '100%',
                    width: `${(coin.market_data.current_price.usd - coin.market_data.low_24h.usd) / (coin.market_data.high_24h.usd - coin.market_data.low_24h.usd) * 100}%`,
                    background: 'linear-gradient(to right, #eb2d3a, #90ee90)',
                    borderRadius: '10px'
                  }}></div>
                  <div style={{
                    height: '100%',
                    flex: 1,
                    backgroundColor: '#F0F8FF',
                    borderRadius: '10px'
                  }}></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px', fontSize: "small" }}>
                  <span><ArrowUpwardIcon />current({coin.market_data.current_price.usd})</span>
                </div>
                <br />
                <hr />
                <br />
                <div className='flex-cols' style={{ border: "1px solid #000080", padding: "5px", borderRadius: "6px", backgroundColor: "#A4DDED" }}>
                  <div className='flex-row cent' style={{ justifyContent: "space-between", borderBottom: "1px solid white", padding: "12px" }}>
                    <div style={{ fontSize: "medium", color: "#003153" }}>Market Cap</div>
                    <div style={{ fontSize: "mediumedium", color: "#132257" }} className='bolder'>$ {coin.market_data.market_cap.usd}</div>
                  </div>
                  <div className='flex-row cent' style={{ justifyContent: "space-between", borderBottom: "1px solid white", padding: "12px" }}>
                    <div style={{ fontSize: "medium", color: "#003153" }}>Volume</div>
                    <div className="flex-row cent bolder" style={{ fontSize: "medium", color: "#132257" }} ><EqualizerIcon />{coin.market_data.total_volume.usd}</div>
                  </div>
                  <div className='flex-row cent' style={{ justifyContent: "space-between", borderBottom: "1px solid white", padding: "12px" }}>
                    <div style={{ fontSize: "medium", color: "#003153" }}>Current Supply </div>
                    <div style={{ fontSize: "medium", color: "#132257" }} className='bolder'>{coin.market_data.circulating_supply}</div>
                  </div>
                  <div className='flex-row cent' style={{ justifyContent: "space-between", borderBottom: "1px solid white", padding: "12px" }}>
                    <div style={{ fontSize: "medium", color: "#003153" }}>Totla Supply </div>
                    <div style={{ fontSize: "medium", color: "#132257" }} className='bolder'>{coin.market_data.max_supply}</div>
                  </div>
                  <div className='flex-row cent' style={{ justifyContent: "space-between", borderBottom: "1px solid white", padding: "12px" }}>
                    <div style={{ fontSize: "medium", color: "#003153" }}>Genesis Date</div>
                    <div style={{ fontSize: "medium", color: "#132257" }} className='bolder'>{coin.genesis_date}</div>
                  </div>
                  <div className='flex-row cent' style={{ justifyContent: "space-between", borderBottom: "1px solid white", padding: "12px" }}>
                    <div style={{ fontSize: "medium", color: "#003153" }}>PortFolio User</div>
                    <div style={{ fontSize: "medium", color: "#132257" }} className='bolder'>{coin.watchlist_portfolio_users}</div>
                  </div>

                </div>
                <br />
              </div>
              {/* <hr /> */}
              <div className='rightr' >
                <div style={{ border: "1px solid #002D62", borderRadius: "5px" }}>
                  <table style={{ width: "100%", }}>
                    <thead>
                      <tr>
                        <th>1h</th>
                        <th>24h</th>
                        <th>7d</th>
                        <th>14d</th>
                        <th>30d</th>
                        <th>1y</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {coin.market_data.price_change_percentage_1h_in_currency.usd > 0
                            ? <div style={{ color: "green", backgroundColor: "#ACE1AF" }} className='flex-row cent bolder'><ArrowDropUpIcon />{coin.market_data.price_change_percentage_1h_in_currency.usd}</div>
                            : <div style={{ color: "red", backgroundColor: "#FFCCCC" }} className='flex-row cent bolder'><ArrowDropDownIcon />{coin.market_data.price_change_percentage_1h_in_currency.usd}</div>}
                        </td>
                        <td>
                          {coin.market_data.market_cap_change_percentage_24h > 0
                            ? <div style={{ color: "green", backgroundColor: "#ACE1AF" }} className='flex-row cent bolder'><ArrowDropUpIcon />{coin.market_data.price_change_percentage_24h}</div>
                            : <div style={{ color: "red", backgroundColor: "#FFCCCC" }} className='flex-row cent bolder'><ArrowDropDownIcon />{coin.market_data.price_change_percentage_24h}</div>}
                        </td>
                        <td>
                          {coin.market_data.price_change_percentage_7d > 0
                            ? <div style={{ color: "green", backgroundColor: "#ACE1AF" }} className='flex-row cent bolder'><ArrowDropUpIcon />{coin.market_data.price_change_percentage_7d}</div>
                            : <div style={{ color: "red", backgroundColor: "#FFCCCC" }} className='flex-row cent bolder'><ArrowDropDownIcon />{coin.market_data.price_change_percentage_7d}</div>}
                        </td>
                        <td>
                          {coin.market_data.price_change_percentage_14d > 0
                            ? <div style={{ color: "green", backgroundColor: "#ACE1AF" }} className='flex-row cent bolder'><ArrowDropUpIcon />{coin.market_data.price_change_percentage_14d}</div>
                            : <div style={{ color: "red", backgroundColor: "#FFCCCC" }} className='flex-row cent bolder'> <ArrowDropDownIcon />{coin.market_data.price_change_percentage_14d}</div>}
                        </td>
                        <td>
                          {coin.market_data.price_change_percentage_30d > 0
                            ? <div style={{ color: "green", backgroundColor: "#ACE1AF" }} className='flex-row cent bolder'><ArrowDropUpIcon />{coin.market_data.price_change_percentage_30d}</div>
                            : <div style={{ color: "red", backgroundColor: "#FFCCCC" }} className='flex-row cent bolder'><ArrowDropDownIcon />{coin.market_data.price_change_percentage_30d}</div>}
                        </td>
                        <td>
                          {coin.market_data.price_change_percentage_1y > 0
                            ? <div style={{ color: "green", backgroundColor: "#ACE1AF" }} className='flex-row cent bolder'><ArrowDropUpIcon />{coin.market_data.price_change_percentage_1y}</div>
                            : <div style={{ color: "red", backgroundColor: "#FFCCCC" }} className='flex-row cent bolder'><ArrowDropDownIcon />{coin.market_data.price_change_percentage_1y}</div>}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br />
                <div className='flex-row' style={{ backgroundColor: "#E0FFFF", borderRadius: "5px", border: "1px solid #002D62", justifyContent: "space-between" }}>
                  <div className='flex-row cent'>
                    <div className='butt1' onClick={() => setVal(1)}>Price</div>
                    <div className='butt1' onClick={() => setVal(2)}>marketCap  </div>
                    <div className='butt1' onClick={() => setVal(3)}>Volume</div>
                  </div>
                  <div></div>
                  <div className='flex-row cent' >
                    <div className='flex-cols cent' style={{ fontWeight: "bold" }}>Time : </div>
                    <div onClick={() => setGrp(1)} className='butt'>24h</div>
                    <div onClick={() => setGrp(7)} className='butt'>7d</div>
                    <div onClick={() => setGrp(30)} className='butt'>1m</div>
                    <div onClick={() => setGrp(90)} className='butt'>3m</div>
                    <div onClick={() => setGrp(360)} className='butt'>1y</div>
                  </div>
                </div>
                {
                  !loading ? <div>
                    <VictoryChart
                      padding={{ top: 20, right: 20, bottom: 60, left: val === 1 ? 60 : 130 }}
                      animate={{
                        duration: 200,
                        onLoad: { duration: 600 }
                      }}>
                      <VictoryStack>
                        <VictoryArea name="area-4" data={grpData} style={{ data: { fill: 'white', stroke: "red", strokeWidth: 1 } }} />
                      </VictoryStack>
                    </VictoryChart>
                  </div> : <><Loader /></>
                }
              </div>
            </div >

            <div className='bottomr'>
              <u><h1>Description</h1></u>
              <div style={{ margin: 25, display: '-webkit-box', WebkitLineClamp: '4', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {coin.description.en}
              </div>
            </div>
          </>
          : <><Loader /></>
      }
    </>
  )
}
export default CoinDetails
