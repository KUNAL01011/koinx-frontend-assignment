import Header from "../components/Header";
import TradingViewWidget from "../components/Chart";
import UpgradCard from "../components/UpgradCard";
import TrandingCoins from "../components/TrandingCoins";
import tabs from "../constant/tabs";
import { useState } from "react";
import CoinDetails from "../components/CoinDetails";
import Sentiment from "../components/Sentiment";
import AboutCoin from "../components/AboutCoin";
import Tokenomics from "../components/Tokenomics";
import Teams from "../components/Teams";
import Footer from "../components/Footer";
const HomePage = () => {
  const [active, setActive] = useState(0);
  return (
    <div>
      <Header />
      <main className="w-[90%] m-auto mt-8 flex flex-col lg:flex-row justify-between gap-8">
        {/* left bar */}
        <div className="lg:w-[881px] w-full">
          <TradingViewWidget />
          <br />
          <div className="flex justify-between border-b-2 overflow-x-auto whitespace-nowrap">
            {tabs.map((item, index) => (
              <div key={index} className="flex">
                <span
                  className={`${
                    item.id === active ? "border-b-2 border-b-blue-700" : ""
                  } text-lg px-4`} // Added padding for better spacing
                >
                  {item.title}
                </span>
              </div>
            ))}
          </div>
          <br />
          <CoinDetails />
          <br />
          <Sentiment />
          <br />
          <AboutCoin />
          <br />
          <Tokenomics />
          <br />
          <Teams />
          <br />
        </div>

        {/* right bar */}
        <div className="flex flex-col flex-wrap gap-8 w-full lg:w-auto items-center">
          <UpgradCard />
          <TrandingCoins />
          <br />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
