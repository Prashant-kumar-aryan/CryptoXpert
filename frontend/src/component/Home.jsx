//import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Coins from './Coins.jsx'
import data from './temp'
import Loader from "./Loader.jsx"
import "./Home.css"
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
      <section id="page-header" >
            <div >
              <h1 id ="hash">#</h1>
            </div>
            <div className='text'>
              <h2>LEARN  MORE</h2>
              <h1>TRADE MORE</h1>
            </div>
      </section>
    </div>
    )
  )
}

export default Home
