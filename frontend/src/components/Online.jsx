import React, { useState } from 'react'
import { useEffect } from 'react'
import { Card } from './Card'

const Online = () => {
    const [data, setData] = useState([])

    const fetchOnline = async () => {
        const response = await fetch("http://localhost:5000/top-restaurant-chains")
        const apidata = await response.json()
        setData(apidata)
    }

    useEffect(()=>{
       fetchOnline()
    },[])

    
  return (
    <>
       <div className='max-w-[1200px] mx-auto mt-[40px] px-2'>
     <div className="flex item-center justify-between my-3">
        <div className="text-[20px] font-bold">Top restaurant Chains in mumbai</div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
            {
                data.map((d,i)=>{
                    return <Card {...d} key={i}/>
                })
            }
        </div>
        </div>
    </>
  )
}

export default Online
