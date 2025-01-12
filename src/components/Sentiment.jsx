import SentimentCard from "./cards/SentimentCard";

const Sentiment = () => {
  return (
    <div className="bg-white rounded-lg px-4 py-8 sm:px-6 sm:py-10">
      <h1 className="font-bold text-2xl sm:text-3xl mb-4">Sentiment</h1>

      {/* Key Events Section */}
      <div className="pb-5">
        <h3 className="text-md font-semibold mb-2">Key Events</h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <SentimentCard
            title="Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt."
            msg="Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim."
            icon="/assets/sentimentCard1.png"
          />
          <SentimentCard
            title="Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt."
            msg="Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim."
            icon="/assets/sentimentCard2.png"
          />
        </div>
      </div>

      {/* Analyst Estimates Section */}
      <div>
        <h3 className="text-md font-semibold mb-2">Analyst Estimates</h3>
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <div className="w-20 h-20 rounded-full bg-[#EBF9F4] flex justify-center items-center">
            <span className="text-[#0FBA83] text-2xl sm:text-3xl">76%</span>
          </div>
          <div className="w-full flex flex-col gap-6">
            {/* Buy */}
            <div className="flex justify-start sm:justify-center items-center gap-4">
              <span className="w-16 sm:w-8">Buy</span>
              <div className="w-full bg-gray-200 rounded-md h-2 flex items-center">
                <div
                  className="bg-[#00B386] h-full rounded-md"
                  style={{ width: "76%" }}
                ></div>
              </div>
            </div>

            {/* Hold */}
            <div className="flex justify-start sm:justify-center items-center gap-4">
              <span className="w-16 sm:w-8">Hold</span>
              <div className="w-full bg-gray-200 rounded-md h-2 flex items-center">
                <div
                  className="bg-[#C7C8CE] h-full rounded-md"
                  style={{ width: "8%" }}
                ></div>
              </div>
            </div>

            {/* Sell */}
            <div className="flex justify-start sm:justify-center items-center gap-4">
              <span className="w-16 sm:w-8">Sell</span>
              <div className="w-full bg-gray-200 rounded-md h-2 flex items-center">
                <div
                  className="bg-red-600 h-full rounded-md"
                  style={{ width: "16%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
