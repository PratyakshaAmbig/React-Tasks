import React, { useState } from "react";

const CopyText = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const [copy, setCopy] = useState(false);

  const handleCopy = (value) => {
    setError(" ");
    if (!value.trim()) {
      setError("Type some values to copy");
      return;
    }
    // Use the naviagator.clipboard.writerText() API to copy the values from the clipboard
    navigator.clipboard.writeText(value);
    setCopy(true);
    // Reset the error message after 2 second
    setTimeout(() => setCopy(false), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center my-10">
      <h1 className="text-4xl font-bold">Copy to Clipboard</h1>
      <h3 className="mt-5">Click the button to copy the text</h3>
      <div className="border p-4 w-xl rounded-sm flex items-center gap-1 mt-5">
        <label className="w-[22%]">Enter your text:</label>
        <input
          className="p-1 border focus:outline-none rounded-sm w-[60%]"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="px-4 py-1 w-[20%] rounded-sm cursor-pointer border"
          onClick={() => handleCopy(text)}
        >
          Copy
        </button>
      </div>
      {
        copy && (
            <p className="text-green-500">Copied!</p>
        )
      }
      {
        error && (
            <p className="text-red-500">{error}</p>
        )
      }
    </div>
  );
};

export default CopyText;
