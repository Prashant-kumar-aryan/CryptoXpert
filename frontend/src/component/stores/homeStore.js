import axios from "axios";
import { create } from "zustand";
import { debounce } from "../helpers/debounce";

const homeStore = create((set) => ({
  coins: [],
  trending: [],
  featured: true,
  linearLoading: false,
  query: "",

  setQuery: (e) => {
    set({ query: e.target.value });
    homeStore.getState().searchCoins();
  },

  searchCoins: debounce(async () => {
    const { query, trending } = homeStore.getState();
    set({ linearLoading: true });

    if (query.length > 2) {
      try {
        const res = await axios.get(
          `https://api.coingecko.com/api/v3/search?query=${query}`
        );
        const coins = res.data.coins.map((coin) => {
          return {
            name: coin.name,
            image: coin.large,
            id: coin.id,
          };
        });
        if (res) set({ linearLoading: false });
        set({ coins });
        set({ featured: false });
      } catch (error) {
        console.error("Error fetching coins:", error);
      }
      //   console.log(res);
    } else {
      set({ coins: trending });
      set({ featured: true });
      set({ linearLoading: false });
    }
  }, 500),

  fetchCoins: async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      const coins = res.data.coins.map((coin) => {
        return {
          name: coin.item.name,
          image: coin.item.large,
          id: coin.item.id,
          priceBtc: coin.item.price_btc,
          priceInr: "₹" + (coin.item.price_btc * 5844222).toFixed(6),
        };
      });

      set({ coins, trending: coins });
    } catch (error) {
      console.error("Error fetching coins:", error);
    }
  },
}));

export default homeStore;
