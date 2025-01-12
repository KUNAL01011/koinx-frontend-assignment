const Tokenomics = () => {
  return (
    <div className="bg-white rounded-lg px-4 py-8">
      <h1 className="font-bold text-2xl pb-4">Tokenomics</h1>
      <h3 className="text-lg pb-4">Initial Distribution</h3>
      <div className="flex flex-col md:flex-row items-center gap-8 pb-8">
        <img
          src="/assets/chart.svg"
          alt="Tokenomics Chart"
          className="w-1/8 max-w-xs md:max-w-md"
        />
        <div className="mt-4 md:mt-0">
          <div className="flex items-center gap-4 pb-2">
            <div className="bg-[#0082FF] w-3 h-3 rounded-full"></div>
            <span>Crowdsale investors: 80%</span>
          </div>
          <div className="flex items-center gap-4 pb-2">
            <div className="bg-[#FAA002] w-3 h-3 rounded-full"></div>
            <span>Foundation: 20%</span>
          </div>
        </div>
      </div>
      <p className="text-gray-500 pb-2">
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
        vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
        amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
        eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna
        felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
        aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at
        curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu
        ut. Vulputate ipsum aliquet odio nisi eu ac risus.
      </p>
    </div>
  );
};

export default Tokenomics;
