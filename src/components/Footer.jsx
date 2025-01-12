import { useState, useEffect } from "react";
import CoinsDetailCard from "./cards/CoinsDetailCard";

const Footer = () => {
  const [coins, setCoins] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch coins data from API
  useEffect(() => {
    const fetchCoinsData = async () => {
      try {
        const res = await fetch(`https://api.coingecko.com/api/v3/search/trending`);
        const data = await res.json();
        setCoins(data.coins); // Access the nested 'coins' array
      } catch (error) {
        console.error("Error fetching coins data:", error);
      }
    };

    fetchCoinsData();
  }, []);

  // Carousel navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? coins.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === coins.length - 1 ? 0 : prevIndex + 1));
  };
console.log(coins)
  return (
    <div className="bg-white">
      <div className="w-[90%] m-auto">
        <div className="flex justify-between items-center h-[80px]">
          <h1 className="font-semibold text-2xl">You May Also Like</h1>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrev}
              className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
            >
              &lt; {/* Left Arrow */}
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
            >
              &gt; {/* Right Arrow */}
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden relative w-full">
          <div
            className="flex transition-transform duration-300 gap-8"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${coins.length * 100}%`,
            }}
          >
            {coins.map((coinItem, index) => (
              <CoinsDetailCard
                key={index} // Use a unique key
                coinName={coinItem.item.name}
                sparkline={coinItem.item.data.sparkline}
                priceChangePercentage={parseFloat(coinItem.item.data.price_change_percentage_24h.usd || 0).toFixed(3)}
                price={coinItem.item.data.price}
                thumb={coinItem.item.thumb} // Thumbnail image
              />
            ))}
          </div>
        </div>
        <br />
      </div>
      <div className="w-[90%] m-auto">
        <div className="flex justify-between items-center h-[80px]">
          <h1 className="font-semibold text-2xl">Trending Coins</h1>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrev}
              className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
            >
              &lt; {/* Left Arrow */}
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
            >
              &gt; {/* Right Arrow */}
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden relative w-full">
          <div
            className="flex transition-transform duration-300 gap-8"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${coins.length * 100}%`,
            }}
          >
            {coins.map((coinItem, index) => (
              <CoinsDetailCard
                key={index} // Use a unique key
                coinName={coinItem.item.name}
                sparkline={coinItem.item.data.sparkline}
                priceChangePercentage={parseFloat(coinItem.item.data.price_change_percentage_24h.usd || 0).toFixed(3)}
                price={coinItem.item.data.price}
                thumb={coinItem.item.thumb} // Thumbnail image
              />
            ))}
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Footer;
