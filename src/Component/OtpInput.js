import React, { useState } from "react";
import "./OtpInput.css";

const OtpInput = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleInputChange = (index, event) => {
    const value = event.target.value;

    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  return (
    <div className="otp_input">
      {otp.map((digit, index) => (
        <input
          className="input_box"
          key={index}
          id={`otp-input-${index}`}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleInputChange(index, e)}
        />
      ))}
    </div>
  );
};

export default OtpInput;
