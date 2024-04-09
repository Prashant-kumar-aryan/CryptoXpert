import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader.jsx";
import ErrorComponent from "./ErrorComponent.jsx";
import "../component/Styles/Exchanges.css";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import ExchangesStore from "./stores/ExchangesStore.js";
const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState(false);
  const store = ExchangesStore();
  useEffect(() => {
    const fetchEx = async () => {
      try {
        setLoading(true);
        await store.fetchExchanges();
        if (store.Exchanges) {
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        seterror(true);
      }
    };
    fetchEx();
  }, []);
  if (error)
    return <ErrorComponent message={"Error while Fetching Exchanges"} />;

  // return <Loader />;
  return loading ? (
    <Loader />
  ) : (
    <>
      <div className="exchanges">
        {store.Exchanges.map((i) => (
          <ExchangesCard
            key={i.key}
            name={i.name}
            imgSrc={i.imgSrc}
            rank={i.rank}
            url={i.url}
          />
        ))}
      </div>
    </>
  );
};
const ExchangesCard = ({ name, imgSrc, rank, url }) => {
  return (
    <div className="exchangesCard">
      <div className="iconWrapper">
        <InsertLinkIcon
          fontSize="small"
          style={{ transform: "rotate(125deg)" }}
        />
      </div>
      <a href={url} target="_blank">
        <img src={imgSrc} alt={name} />
        <h4 className="Trust rank">Trust Rank - {rank}</h4>
        <h4 className="ex-name">{name}</h4>
      </a>
    </div>
  );
};
export default Exchanges;
