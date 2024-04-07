import { create } from "zustand";
import axios from "axios";
import { prevData } from "../bitcoin";

const coinsStore = create((set) => ({
  coins: [],
  loading: true,
  error: false,
  currency: "inr",
  page: 1,

  fetchCoins: async () => {
    const { currency, page } = coinsStore.getState();
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&per_page=12&page=${page}`
      );
      set({ coins: data, loading: false, error: false });
    } catch (error) {
      set({ error: true, coins: prevData, loading: false });
      console.error("Error fetching data:", error);
    }
  },

  prevPage: () => {
    const { page } = coinsStore.getState();
    if (page <= 1) return;
    set({ page: page - 1, loading: true });
    coinsStore.getState().fetchCoins();
  },

  nextPage: () => {
    const { page } = coinsStore.getState();
    set({ page: page + 1, loading: true });
    coinsStore.getState().fetchCoins();
  },

  handleCurrencyChange: (selectedCurrency) => {
    set({ currency: selectedCurrency, page: 1, loading: true });
    coinsStore.getState().fetchCoins();
  },

  getCurrencySymbol: () => {
    const { currency } = coinsStore.getState();
    return currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  },
}));

export default coinsStore;
