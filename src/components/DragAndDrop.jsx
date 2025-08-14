import React, { useRef, useState } from "react";

const DragAndDrop = () => {
  const initialData = {
    Todo: ["Todo1", "Todo2", "Todo3", "Todo4"],
    Inprogress: ["Inprogress1", "Inprogress2", "Inprogress3", "Inprogress4"],
    Completed: ["Completed1", "Completed2", "Completed3", "Completed4"],
  };
  const [data, setData] = useState(initialData);
  const dragItem = useRef();
  const dragContainder = useRef();

  const handleDragStart = (e, item, container) => {
    dragItem.current = item;
    dragContainder.current = container;
    e.target.style.opacity = "0.5";
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
  };

  const handleDrop = (e, targetContainer) =>{
    const item = dragItem.current;
    const sourceContainer = dragContainder.current;
    setData((prev)=>{
        const newData = {...prev};
        newData[sourceContainer] = newData[sourceContainer].filter((i)=> i!==item)
        newData[targetContainer]= [...newData[targetContainer],item];
        return newData;
    })
  }

  const handleDragOver = (e)=>{
    e.preventDefault()
  }

  return (
    <div className="flex justify-around items-center">
      {Object.keys(data).map((container) => (
        <div onDrop={(e)=>handleDrop(e,container)} onDragOver={handleDragOver}>
          <h1 className="text-2xl font-bold text-center my-5">{container}</h1>
          <div className="border p-2 rounded-lg w-[200px] h-auto text-center bg-gray-200">
            {data[container].map((item, index) => (
              <div
                className="text-lg p-2 cursor-move border m-2 rounded-sm bg-white"
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, item, container)}
                onDragEnd={handleDragEnd}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DragAndDrop;
