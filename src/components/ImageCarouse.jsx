import React, { useEffect, useRef, useState } from "react";
import { bannerImage } from "../assets/assets";

const ImageCarouse = () => {
  const [index, setIndex] = useState(0);
  let intervalId;
  const ref = useRef(null);

  // console.log("Outside render..")

  const handleNext = () => {
    // console.log("Inside render")
    // if (index === bannerImage.length - 1) {
    //   setIndex(0);
    //   return;
    // }else{
    //   setIndex(index + 1);
    // }
    setIndex((prevIndex)=>{
      if(prevIndex === bannerImage.length -1){
        return 0;
      }
      return prevIndex + 1;
    })
  };

  const handlePrev = ()=>{
    if(index === 0){
      setIndex(bannerImage.length-1)
    }else{
      setIndex(index-1)
    }
  }

  useEffect(()=>{
    ref.current = setInterval(handleNext,2000)
    return ()=>{
      clearInterval(ref.current)
    }
  },[])
  return (
    <div className="relative" onMouseEnter={()=>clearInterval(ref.current)} onMouseLeave={()=> ref.current = setInterval(handleNext,2000)}>
      <button onClick={handlePrev} className="absolute top-1/2 left-3 z-50 bg-black text-white p-3 rounded-full cursor-pointer">
        {"<"}
      </button>
      {
        <img
          src={bannerImage[index]}
          className="w-full object-cover h-[600px]"
        />
      }
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-3 z-50 bg-black text-white p-3 rounded-full cursor-pointer"
      >
        {">"}
      </button>
    </div>
  );
};

export default ImageCarouse;
