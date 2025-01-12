const UpgradCard = () => {
  return (
    <div className="bg-[#0052FE] w-[90%] sm:w-[80%] md:w-[426px] h-auto sm:h-[480px] md:h-[515px] flex flex-col justify-between rounded-lg px-6 py-6 md:px-8 md:py-4 items-center">
      <h1 className="text-white text-xl sm:text-2xl md:text-2xl text-center font-bold pb-4">
        Get Started with KoniX for Free
      </h1>
      <p className="text-white text-center font-semibold text-xs sm:text-sm md:text-sm pb-6 md:pb-8 leading-5 md:leading-6">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <img
        src="/assets/upgradCard.svg"
        alt="upgradCard"
        className="w-[50%] sm:w-[40%] md:w-[40%] m-auto pb-4 md:pb-5"
      />
      <button className="bg-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg flex justify-center items-center m-auto text-sm sm:text-base">
        Get Started for FREE
      </button>
    </div>
  );
};

export default UpgradCard;
