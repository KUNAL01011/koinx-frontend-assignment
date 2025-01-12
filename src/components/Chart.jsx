import { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create the script element
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;

    // Properly stringify the inner configuration
    script.innerHTML = JSON.stringify({
      symbols: [["Bitcoin", "BTCUSD|12M"]],
      chartOnly: false,
      width: "100%", // Make width responsive
      height: "400", // Limit height to avoid excessive vertical space
      locale: "en",
      colorTheme: "light",
      autosize: false, // Ensure we set a fixed height
      showVolume: true,
      showMA: true,
      hideDateRanges: false,
      hideMarketStatus: false,
      hideSymbolLogo: false,
      scalePosition: "right",
      scaleMode: "Normal",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
      fontSize: "10",
      noTimeScale: false,
      valuesTracking: "3",
      changeMode: "price-only",
      chartType: "candlesticks",
      maLineColor: "#2962FF",
      maLineWidth: 1,
      maLength: 9,
      lineType: 0,
      dateRanges: ["1w|60", "1m|1D", "6m|120", "12m|1D", "60m|1W"],
      downColor: "#f7525f",
      upColor: "#22ab94",
      borderUpColor: "#22ab94",
      borderDownColor: "#f7525f",
      wickUpColor: "#22ab94",
      wickDownColor: "#f7525f",
    });

    // Append the script to the container
    containerRef.current.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ""; // Remove all children
      }
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <div
      className="tradingview-widget-container bg-white shadow-lg rounded-lg p-4"
      ref={containerRef}
      style={{
        width: "100%", // Full width of the parent container
        maxWidth: "881px", // Maximum width for larger screens
        height: "auto", // Automatic height
        maxHeight: "450px", // Limit the maximum height
        overflow: "hidden", // Prevent overflowing content
      }}
    >
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright text-center mt-2">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
          className="text-blue-500 underline"
        >
          Track all markets on TradingView
        </a>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
