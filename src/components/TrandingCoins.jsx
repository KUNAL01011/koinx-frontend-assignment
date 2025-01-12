import { useEffect, useState } from "react";

const TrendingCoins = () => {
  const [coins, setCoins] = useState([]);

  // Fetch coins data from API
  useEffect(() => {
    const fetchCoinsData = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/search/trending`
        );
        const data = await res.json();
        setCoins(data.coins.slice(0, 3)); // Take only the top 3 coins
      } catch (error) {
        console.error("Error fetching coins data:", error);
      }
    };

    fetchCoinsData();
  }, []);

  return (
    <div className="bg-white w-[90%] sm:w-[80%] md:w-[426px] flex flex-col justify-between rounded-lg px-6 py-6 md:px-8 md:py-4">
      <h1 className="text-2xl font-bold pb-4">Trending Coins (24h)</h1>
      <div className="flex gap-4 flex-col">
        {coins.map((item, index) => (
          <div key={index} className="flex justify-between">
            <div className="flex gap-4">
              <img src={item.item.thumb} alt="" className="w-8 h-8 rounded-full"/>
              <p>{item.item.name}</p>
            </div>
            <p
              className={`${
                item.item.data.price_change_percentage_24h.usd > 0
                  ? "bg-green-500 text-white px-2 rounded-lg"
                  : "bg-red-500 text-white px-2 rounded-lg"
              }`}
            >
              {parseFloat(
                item.item.data.price_change_percentage_24h.usd || 0
              ).toFixed(3)}
              %
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;
