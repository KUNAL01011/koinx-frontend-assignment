import React from 'react'

const CoinsDetailCard = ({thumb,coinName,price,priceChangePercentage,sparkline}) => {
  return (
    <div className='rounded-lg border-2 w-[250px] p-4 flex flex-col justify-center'>
      <div className='flex items-center gap-2'>
        <img src={thumb} alt="logo" className='w-10 rounded-full object-cover'/>
        <p>{coinName}</p>
        <p className={`${priceChangePercentage > 0 ? "bg-[#0AB27D0F] text-[#32BE88]" : "bg-[#EE68551A] text-[#E96975]"} px-2 rounded-lg `}>{priceChangePercentage}%</p>
      </div>
      <h1>${price}</h1>
      <br />
      <img src={sparkline} alt="" />
    </div>
  )
}

export default CoinsDetailCard
