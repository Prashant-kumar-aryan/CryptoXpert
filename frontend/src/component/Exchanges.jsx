import axios from 'axios'
import React, { useEffect, useState } from 'react'
//import Coins from './Coins.jsx'
import Loader from "./Loader.jsx"
import {data} from "./extemp.jsx"
import ErrorComponent from "./ErrorComponent.jsx"
const Exchanges = () => {

const [exchanges,setExchanges]=useState([]);
const[loading,setLoading]=useState(true);
const[error,seterror]=useState(false);
useEffect(() => {
  const fetchAllExchanges = async () => {
    try {
     // const { data } = await axios.get("https://api.coingecko.com/api/v3/exchanges");
      
     setLoading(false);
      setExchanges(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
      seterror(true);
    }
  };
  fetchAllExchanges();
}, []);
  if(error) return <ErrorComponent message={"Error while Fetching Exchanges"}/>

  return (
    loading?<Loader/>:(
    <div className='exchanges'>
      {exchanges.map((i)=>(
        <ExchangesCard key={i.id} name = {i.name} imgSrc={i.image} rank ={i.trust_score_rank}
        url ={i.url}
/>
      ))}
    </div>)
  )
}
const ExchangesCard =({ name,imgSrc,rank,url})=>{
  return (
    <div className='exchangesCard'>
      <a href={url} target='_blank'>
        <img src={imgSrc} alt={name}/>
        <h4>{rank}</h4>
        <h4>{name}</h4>
      </a>
    </div>
  )
};
export default Exchanges
