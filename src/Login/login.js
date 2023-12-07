import React, { useEffect, useState } from "react";
import "./login.css";
import "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import PhoneInput from "react-phone-input-2";
import OtpVerification from "./OtpVerification";

const Login = ({ setLoggedIn }) => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [otpVerify, setOtpVerfiy] = useState(false);
  const [canLogin, setCanLogin] = useState(false);

  useEffect(() => {
    if (canLogin) {
      setLoggedIn(true);
    }
  }, [canLogin]);

  return (
    <div className="login">
      <div className="login_container">
        {otpVerify ? (
          <OtpVerification
            phoneNumber={phoneNumber}
            setOtpVerfiy={setOtpVerfiy}
            setCanLogin={setCanLogin}
          />
        ) : (
          <div className="signin_container">
            <div>
              <p className="signin_text">Sign In</p>
              <p className="discription_text">
                Please enter your mobile number to login. We will send an OTP to
                verify your number.
              </p>
            </div>
            <PhoneInput
              country={"in"}
              value={phoneNumber}
              onChange={(phoneNumber) => setPhoneNumber(phoneNumber)}
              placeholder="Phone Number"
              inputStyle={{ width: "100%" }}
              inputProps={{
                name: "Phone",
                required: true,
                autoFocus: true,
              }}
            />
            <button
              className="submit_button"
              type="submit"
              onClick={() => setOtpVerfiy(true)}
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
