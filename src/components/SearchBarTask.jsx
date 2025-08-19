import React, { useState } from "react";

const SearchBarTask = () => {
  const [inputValue, setInputValue] = useState("");

  const dummyData = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      age: 28,
      role: "Admin",
      isActive: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      age: 32,
      role: "User",
      isActive: false,
    },
    {
      id: 3,
      name: "Sam Wilson",
      email: "sam.wilson@example.com",
      age: 25,
      role: "Moderator",
      isActive: true,
    },
  ];

  const filterData = dummyData.filter((data)=>data.name.toLowerCase() === inputValue.toLocaleLowerCase());

  console.log(filterData)

  return (
    <div className="flex justify-center items-center flex-col my-10">
      <h1 className="text-4xl font-bold">SearchBar Task</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border p-2 w-2xl my-5"
      />
      {
        filterData.length >0?(
            filterData.map((value)=>(
                <div key={value} className="border p-4 rounded-2xl">
                    <h1 className="text-2xl font-bold">Full Details of the user</h1>
                    <h1 className="font-bold text-xl">Name : <span className="font-medium">{value.name}</span></h1>
                    <p className="font-bold text-xl">Email : <sapn className="font-medium">{value.email}</sapn></p>
                    <p className="font-bold text-xl">Age : <span className="font-medium">{value.age}</span></p>
                    <p className="font-bold text-xl">Role : <span className="font-medium">{value.role}</span></p>
                </div>
            ))
        ):(
            <h1>No data available</h1>
        )
      }
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-2xl mt-10">You can search User Details using below name</h1>
        {
            dummyData.map((data)=>(
                <h1 className="text-xl font-semibold" key={data}>{data.name}</h1>
            ))
        }
      </div>
    </div>
  );
};

export default SearchBarTask;
