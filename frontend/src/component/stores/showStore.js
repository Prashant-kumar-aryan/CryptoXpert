import axios from "axios";
import { create } from "zustand";
// import { debounce } from "../helpers/debounce";

const showStore = create((set) => ({
  fetchData: async (id) => {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`
    );
    console.log(res);
  },
}));

export default showStore;
