import axios from "axios";
import { useEffect, useState } from "react";

const CoinDetails = () => {
  const [coinData, setCoinData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBitcoinData = async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price`,
        {
          params: {
            ids: "bitcoin",
            vs_currencies: "usd",
            include_market_cap: "true",
            include_24hr_vol: "true",
            include_24hr_change: "true",
            include_24hr_high_low: "true",
          },
        }
      );

      setCoinData(response.data?.bitcoin || {});
    } catch (err) {
      setError("Failed to fetch coin data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBitcoinData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }
console.log(coinData)
  if (!coinData) {
    return <div className="text-red-500">No data available</div>;
  }

  // Safe fallback values
  const currentPrice = coinData.usd?.toFixed(2) || "N/A";
  const marketCap = coinData.market_cap?.toLocaleString() || "N/A";
  const volume = coinData.total_volume?.toLocaleString() || "N/A";
  const change24h = coinData.usd_24h_change?.toFixed(2) || "N/A";
  const high24h = coinData.high_24h?.toFixed(2) || "N/A";
  const low24h = coinData.low_24h?.toFixed(2) || "N/A";

  return (
    <div className="bg-white rounded-lg px-4 py-8 shadow-md">
      {/* Performance Section */}
      <h1 className="font-bold text-2xl mb-4">Performance</h1>
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm text-gray-500">Today's Low</p>
          <p className="text-xl font-semibold">${low24h}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">Current Price</p>
          <p className="text-xl font-semibold text-green-500">
            ${currentPrice}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Today's High</p>
          <p className="text-xl font-semibold">${high24h}</p>
        </div>
      </div>

      {/* Fundamentals Section */}
      <h2 className="font-bold text-xl mb-4">Fundamentals</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Bitcoin Price</p>
          <p className="font-semibold">${currentPrice}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Market Cap</p>
          <p className="font-semibold">${marketCap}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">24h Change</p>
          <p
            className={`font-semibold ${
              change24h > 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {change24h}%
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">24h Volume</p>
          <p className="font-semibold">${volume}</p>
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
