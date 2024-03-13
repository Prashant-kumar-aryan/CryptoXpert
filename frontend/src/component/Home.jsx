//import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import data from './temp'
import Loader from "./Loader.jsx"
import "./Home.css"
import f1 from "./images/feature/f1.jpg"
import f2 from "./images/feature/f2.jpg"
import f3 from "./images/feature/f3.jpg"
import f4 from "./images/feature/f4.jpg"
const Home = () => { 
// const [coins,setCoins]=useState([]);
const[loading,setLoading]=useState(true);
useEffect(() => {
  const fetchAllCoins = async () => {
    try {
      //const { data } = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=20");
      // setCoins(data);
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

      <section id="feature" class="section-p1">
            <div class="fe-box">
                <img src={f1} alt="feature1"/>
                <h6>Smooth Interface</h6>
            </div>
            <div class="fe-box">
                <img src={f2} alt="feature2"/>
                <h6>Happy Learners</h6>
            </div>
            <div class="fe-box">
                <img src={f3} alt="feature3"/>
                <h6>24/7 suppport</h6>
            </div>
            <div class="fe-box">
                <img src={f4} alt="feature4"/>
                <h6>Quality Assured</h6>
            </div>


        </section>

    </div>
    )
  )
}

export default Home
