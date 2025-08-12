import React, { useState } from "react";

const StartRating = () => {
  const starCount = 10;
  const [starIndexValue, setStarIndexValue] = useState(0);
  const [starHoverValue, setStartHoverValue] = useState(0);
  return (
    <div className="flex justify-center items-center flex-col my-10">
      <h1 className="text-5xl font-bold p-4 text-blue-500">Star Rating Task</h1>
      <div>
        {new Array(starCount).fill(0).map((value, index) => (
          <span
            key={index}
            onClick={() => setStarIndexValue(index + 1)}
            className={`${
              (starHoverValue === 0 && index < starIndexValue) ||
              index < starHoverValue
                ? "text-yellow-400"
                : ""
            } cursor-pointer text-5xl`}
            onMouseEnter={() => setStartHoverValue(index + 1)}
            onMouseLeave={() => setStartHoverValue(0)}
          >
            &#9733;
          </span>
        ))}
      </div>
    </div>
  );
};

export default StartRating;
