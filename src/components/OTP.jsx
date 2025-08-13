import React, { useEffect, useRef, useState } from "react";

const OTP = ({ otpLength = 8 }) => {
  const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));
  const ref = useRef([]);

  useEffect(() => {
    ref.current[0].focus();
  }, []);

  const handleKeyDown = (e, index) => {
    const key = e.key;
    // console.log(key)
    if (key === "ArrowLeft") {
      if (index > 0) ref.current[index - 1].focus();
      return;
    }
    if (key === "ArrowRight") {
      if (index + 1 < otpFields.length) ref.current[index + 1].focus();
      return;
    }
    const copyOtpFields = [...otpFields];
    if (key === "Backspace") {
      copyOtpFields[index] = "";
      setOtpFields(copyOtpFields);
      if (index > 0) {
        ref.current[index - 1].focus();
      }
      return;
    }
    // NaN -> Not a Number
    if (isNaN(key)) {
      return;
    }
    // console.log(key);
    copyOtpFields[index] = key;
    if (index + 1 < otpFields.length) {
      ref.current[index + 1].focus();
    }
    setOtpFields(copyOtpFields);
  };
  return (
    <div className="flex justify-center items-center mt-10 flex-col">
      <h1 className="text-4xl font-bold p-4">OTP Field</h1>
      <div>
        {otpFields.map((value, index) => (
          <input
            ref={(currentInput) => (ref.current[index] = currentInput)}
            className="border h-12 w-12 m-1 rounded-sm text-center"
            key={index}
            type="text"
            value={value}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default OTP;
