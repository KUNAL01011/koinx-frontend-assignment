const AboutCard = ({ msg, bg, image }) => {
  return (
    <div className={`flex gap-8 p-2 items-center ${bg} rounded-lg md:w-[45%] w-full`}>
      <img src={image} alt="image" />
      <div>
        <h1 className="text-white font-bold text-2xl">{msg}</h1>
        <button className="px-4 py-2 bg-white text-black font-semibold rounded-lg">
          Check Now
        </button>
      </div>
    </div>
  );
};

export default AboutCard;
