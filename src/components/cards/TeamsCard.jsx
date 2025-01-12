import React from "react";

const TeamsCard = ({ msg, name, image }) => {
  return (
    <div className="bg-[#E8F4FD] px-4 py-6 flex flex-col sm:flex-row gap-8 rounded-lg">
      <div className="flex flex-col gap-2 items-center sm:items-start">
        <img
          src={image}
          alt={name}
          className="w-[300px] sm:w-[520px] rounded-lg mb-4 sm:mb-0"
        />
        <p className="font-semibold">{name}</p>
        <p className="text-gray-400 text-sm">Designations here</p>
      </div>
      <p className="text-sm sm:text-base text-gray-600">{msg}</p>
    </div>
  );
};

export default TeamsCard;
