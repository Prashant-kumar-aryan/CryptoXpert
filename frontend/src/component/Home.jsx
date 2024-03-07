//import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Coins from './Coins.jsx'
import data from './temp'
import Loader from "./Loader.jsx"
const Home = () => {

const [coins,setCoins]=useState([]);
const[loading,setLoading]=useState(true);
useEffect(() => {
  const fetchAllCoins = async () => {
    try {
      //const { data } = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=20");
      setCoins(data);
      setLoading(false);
    } catch (error) {
      alert("Error in api call")
      console.error("Error fetching data:", error);
    }
  };
  fetchAllCoins();
}, []);

  return (
    loading?<Loader/>:(
    <div className='home'>
      {/* {coins.map((i)=>(
        <Coins name={i.name} symbol={i.symbol} key={i.id} imgSrc={i.image} price={i.current_price}/>
      ))} */}
    </div>)
  )
}

export default Home
