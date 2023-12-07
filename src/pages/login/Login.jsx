import React from "react";
import { matchIsValidTel } from "mui-tel-input";
import { useNavigate } from "react-router";
import InputTel from "./component/InputTel";
import { useLoginContext } from "../../context/loginContext";
import { handleLogin } from "./api";

function Login() {
  const { phone, updatePhone, setReqId } = useLoginContext();
  const navigate = useNavigate();

  const inputTel = (newValue) => {
    let phn = newValue.split(" ").join("");
    updatePhone(phn);
  };

  const handleClick = async () => {
    if (!matchIsValidTel(phone)) {
      alert("Incorrect phone format");
      return;
    } else {
      handleLogin(phone)
        .then((data) => {
          setReqId(data.data.requestId);
          navigate("/verify");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[407px] h-[238px]">
        <h1 className="text-[38px] text-purple font-medium mb-2.5">Sign In</h1>
        <p className="  font-normal text-xs mb-3">
          Please enter your mobile number to login. We will send an OTP to
          verify your number.
        </p>
        <InputTel className="mb-6 w-full" onChange={inputTel} value={phone} />
        <button
          className="bg-purple rounded-xl text-lg text-center font-bold text-white py-3.5 w-full"
          onClick={handleClick}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Login;
