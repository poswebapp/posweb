import React from 'react'

const Filter = ({filter,setfilter}) => {
  const options = ["month","year"]
  return (
    <div className='flex justify-start gap-5 content-start flex-row'>
    {options.map((option)=>(
     <span className={`text-center w-20 border-2 rounded-lg p-4 bg-white text-zinc-500 ${filter===option && "bg-amber-400 shadow-lg border-none text-zinc-900"}  `}

      onClick={()=>setfilter(option)}
      >
      
      {option}

    </span> 

    ))}
    </div>
  )
}

export default Filter
