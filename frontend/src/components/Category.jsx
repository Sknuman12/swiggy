import React, { useState } from "react";
import { useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Category = () => {
  const [categories, setCatogory] = useState([]);
  const [slide, setSlide] = useState(0);
  
  const nextslide = () => {
    if(slide == 1)  return false
    setSlide(slide - 3)
  }
  const prevslide = ()=>{
    if(categories.length - 8  == slide)  return false
    setSlide(slide + 3)
  }

  const fetchCategory = async () => {
    const response = await fetch("http://localhost:5000/categories");
    const data = await response.json();
    setCatogory(data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);
  return (
    <div className="mx-auto max-w-[1200px]">
      <div className="flex item-center justify-between my-3">
        <div className="text-[20px] font-bold">Whats on your mind?</div>
        <div className="flex">
          <div className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] mx-2 rounded-full">
            <FaArrowLeft className="cursor-pointer" onClick={nextslide}/>
          </div>
          <div className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] mx-2 rounded-full">
          <FaArrowRight className="cursor-pointer" onClick={prevslide} />
          </div>
        </div>
      </div>
      <div className="flex  overflow-hidden">
        {categories.map((cat, index) => {
          return (
            <div
              style={{
                transform: `translateX(-${slide * 100}%)`,
              }}
              key={index}
              className="w-[150px]  shrink-0 duration-500"
            >
              <img src={"http://localhost:5000/images/" + cat.image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
