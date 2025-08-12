import React, { useState } from "react";
import data from "../data.json";

const Accordion = () => {
  const [showAnswer, setShowAnswer] = useState(null);
  return (
    <div className="flex justify-center flex-col items-center my-10">
      <h1 className="text-blue-900 text-3xl font-bold p-2">Accordion Task</h1>
      {data.faqs.map((obje, index) => (
        <div key={index} className="border p-2 rounded-sm w-4xl m-4">
          <h1 className="flex w-full justify-between items-center text-2xl">
            {obje.question}
            <span
              className="cursor-pointer"
              onClick={() =>
                setShowAnswer((prev) => (prev === index ? null : index))
              }
            >
              {showAnswer === index ? "➖" : "➕"}
            </span>
          </h1>
          <p>{showAnswer === index && obje.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
