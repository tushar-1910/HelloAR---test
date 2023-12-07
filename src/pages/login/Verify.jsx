import React, { useState } from "react";
import { useLoginContext } from "../../context/loginContext";
import { useNavigate } from "react-router";
import { handleVerifyOtp } from "./api";

function Verify() {
  const { phone, reqId } = useLoginContext();
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleInputChange = (index, event) => {
    const input = event.target.value.replace(/\D/g, "").slice(0, 1);
    setOtp([...otp.slice(0, index), input, ...otp.slice(index + 1)]);
  };

  const handleClick = async () => {
    let otpVal = otp.join("");
    console.log(reqId);
    handleVerifyOtp(otpVal, phone, reqId)
      .then((data) => {
        localStorage.setItem("authToken", data.data.token);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  function OtpInput() {
    return (
      <div className="flex flex-row gap-8 mb-6">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            id={`otp-input-${index}`}
            value={digit}
            onChange={(e) => handleInputChange(index, e)}
            maxLength="1"
            className="w-[77px] h-[77px] border border-[#D0D3D4] text-center text-lg"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[407px]">
        <h1 className="text-[38px] text-purple font-medium mb-2.5">
          OTP Verification
        </h1>
        <p className="  font-normal text-xs mb-3">
          We have sent and OTP to {phone}. Please enter the code received to
          verify.
        </p>
        <OtpInput />
        <button
          className="bg-purple rounded-xl text-lg text-center font-bold text-white py-3.5 w-full mb-6"
          onClick={handleClick}
        >
          Verify
        </button>
        <button
          className="w-full underline decoration-black text-center mb-4"
          onClick={handleClick}
        >
          Resend OTP
        </button>
        <button
          className="w-full underline decoration-black text-center mb-4 "
          onClick={() => navigate("/")}
        >
          Use another number
        </button>
      </div>
    </div>
  );
}

export default Verify;
