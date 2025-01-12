const SentimentCard = ({msg,icon,title}) => {
  return (
    <div className="bg-[#E8F4FD] rounded-lg p-2 flex gap-5">
        <img src={icon} alt="" className="w-10 h-10"/>
      <div>
        <h1>{title}</h1>
        <p className="text-gray-500">{msg}</p>
      </div>
    </div>
  )
}

export default SentimentCard
