import AboutCard from "./cards/AboutCard";

const AboutCoin = () => {
  return (
    <div className="bg-white rounded-lg px-4 py-8">
      {/* Heading */}
      <h1 className="font-bold text-2xl">About Bitcoin</h1>
      <br />
      
      {/* Section 1 */}
      <p className="font-semibold text-lg pb-3">What is Bitcoin?</p>
      <p className="text-gray-500">
        Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of
        $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70%
        from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day
        all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC
        and a max supply of 21 M BTC.
      </p>
      <br />

      {/* Section 2 */}
      <p className="font-semibold text-lg pb-3">Lorem ipsum dolor sit amet</p>
      <p className="text-gray-500">
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
        fermentum sapien morbi sodales odio sed rhoncus.
      </p>
      <br />
      <p className="text-gray-500">
        Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
        vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
        felis pellentesque interdum.
      </p>
      <br />
      <p className="text-gray-500 pb-2">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus.
      </p>
      <hr />
      <br />

      {/* Cards Section */}
      <h1 className="font-bold text-2xl">Already Holding Bitcoin?</h1>
      <br />
      <div className="flex flex-wrap gap-4 pb-3">
        <AboutCard
          msg="Calculate your Profits"
          bg={`bg-about-card1`}
          image="/assets/aboutCard1.png"
        />
        <AboutCard
          msg="Calculate your tax liability"
          bg={`bg-about-card2`}
          image="/assets/aboutCard2.png"
        />
      </div>

      {/* Final Section */}
      <p className="text-gray-500 pb-2">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>
      <br />
    </div>
  );
};

export default AboutCoin;