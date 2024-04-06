//import axios from 'axios'
import React, { useEffect, useState } from "react";
// import data from './temp'
import Loader from "./Loader.jsx";
import "../component/Styles/Home.css";
import f1 from "./images/feature/f1.jpg";
import f2 from "./images/feature/f2.jpg";
import f3 from "./images/feature/f3.jpg";
import f4 from "./images/feature/f4.jpg";
import homeStore from "./stores/homeStore.js";
import { Link } from "react-router-dom";
import { LinearProgress } from "@mui/material";

const Home = () => {
  // const [coins,setCoins]=useState([]);
  const store = homeStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      store.fetchCoins();
      if (store.coins) {
        setLoading(false);
      }
    } catch (error) {
      alert("Error in api call");
      console.error("Error fetching data:", error);
    }
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <div className="home">
      <section id="page-header">
        <div>
          <h1 id="hash">#</h1>
        </div>
        <div className="text">
          <h2>LEARN MORE</h2>
          <h1>TRADE MORE</h1>
        </div>
      </section>
      <div>
        {store.featured && <h1 className="featured-h1">Featured coins</h1>}
        {!store.featured && (
          <h1 className="featured-h1" style={{ background: "#90D26D" }}>
            Search Results
          </h1>
        )}
        <input
          type="text"
          value={store.query}
          onChange={store.setQuery}
          placeholder="Type Here to Search"
        />
        {store.linearLoading && <LinearProgress className="LinearProgress" />}
        <div className="CoinList">
          {store.coins.length != 0 ? (
            store.coins.map((coin) => {
              return <CoinListItem key={coin.id} coin={coin} />;
            })
          ) : (
            <>
              <h1 style={{ textAlign: "center" }}>No Such Coins Found 🙂</h1>
              <h5 style={{ textAlign: "center" }}>
                <p>Try checking your Spelling </p>
              </h5>
            </>
          )}
        </div>
      </div>
      <section id="feature" className="section-p1">
        <div className="fe-box">
          <img src={f1} alt="feature1" />
          <h6>Smooth Interface</h6>
        </div>
        <div className="fe-box">
          <img src={f2} alt="feature2" />
          <h6>Happy Learners</h6>
        </div>
        <div className="fe-box">
          <img src={f3} alt="feature3" />
          <h6>24/7 suppport</h6>
        </div>
        <div className="fe-box">
          <img src={f4} alt="feature4" />
          <h6>Quality Assured</h6>
        </div>
      </section>
    </div>
  );
};

const CoinListItem = ({ coin }) => {
  return (
    <div key={coin.id} className="CoinListItem">
      <img src={coin.image} alt={coin.name} height="20px" width="20px" />
      <Link to={`/coins/${coin.id}`}>
        <p>{coin.name}</p>
      </Link>
      <p className="priceInr">{coin.priceInr}</p>
    </div>
  );
};

export default Home;
