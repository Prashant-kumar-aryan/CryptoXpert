import axios from "axios";
import { create } from "zustand";

const ExchangesStore = create((set) => ({
  Exchanges: [],
  fetchExchanges: async () => {
    try {
      const res = await axios.get("https://api.coingecko.com/api/v3/exchanges");
      const Exchanges = res.data.map((i) => {
        return {
          key: i.id,
          name: i.name,
          imgSrc: i.image,
          rank: i.trust_score_rank,
          url: i.url,
        };
      });
      set({ Exchanges });
    } catch (error) {
      console.error("Error fetching coins:", error);
    }
  },
}));

export default ExchangesStore;
