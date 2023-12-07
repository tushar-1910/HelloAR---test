import React from "react";
import OtpInput from "../Component/OtpInput";
import "./login.css";

const OtpVerification = ({ phoneNumber, setOtpVerfiy, setCanLogin }) => {
  return (
    <div className="signin_container">
      <div>
        <p className="signin_text">OTP Verification</p>
        <p className="discription_text">
          We have sent and OTP to +{phoneNumber}. Please enter the code received
          to verify.
        </p>
      </div>
      <OtpInput></OtpInput>
      <button
        className="submit_button"
        type="submit"
        onClick={() => setCanLogin(true)}
      >
        Verify
      </button>
      <a>Resend OTP</a>
      <a onClick={() => setOtpVerfiy(false)}>Use another number</a>
    </div>
  );
};

export default OtpVerification;
