import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Card } from './Card'

export const Toprest = () => {
  const [data, setData] = useState([])
  const [slide, setSlide] = useState(0);

  
  const nextslide = () => {
    console.log(data.length);
    if(data.length - 4 == slide) return false
    setSlide(slide + 1)
  }
  const prevslide = ()=>{
    if(slide == 0) return false
    setSlide(slide - 1)
  }

  const fetchToprest = async () => {
    const response =await fetch("http://localhost:5000/top-restaurant-chains")
    const apidata = await response.json()
    setData(apidata);
  }


  useEffect(() => {
    fetchToprest()
  },[])
  return (
    <>
   <div className='max-w-[1200px] mx-auto mt-[40px] mb-[100px]'>
     <div className="flex item-center justify-between my-3">
        <div className="text-[20px] font-bold">Top restaurant Chains in mumbai</div>
        <div className="flex">
          <div className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] mx-2 rounded-full">
            <FaArrowLeft className="cursor-pointer" onClick={prevslide}/>
          </div>
          <div className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] mx-2 rounded-full">
          <FaArrowRight className="cursor-pointer" onClick={nextslide}/>
          </div>
        </div>
   </div>
   <div className='flex gap-5 overflow-hidden'>
    {
      data.map((d,i) => {
       return ( 
        <div className="shrink-0 grow duration-500" key={i} style={{
          transform: `translateX(-${slide*100}%)`
        }}>
          <Card {...d} /> 
        </div>
       )
      })
    }
   </div>
   </div>
  
   </>

  )
}
