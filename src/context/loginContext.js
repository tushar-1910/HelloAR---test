import React, { createContext, useContext, useState } from "react";
const LoginDetail = createContext("");

const LoginDetailProvider = ({ children }) => {
  const [phone, setPhone] = useState("");
  const [reqId, setReqId] = useState("");

  const updatePhone = (newValue) => {
    setPhone(newValue);
  };

  return (
    <LoginDetail.Provider value={{ phone, updatePhone, reqId, setReqId }}>
      {children}
    </LoginDetail.Provider>
  );
};

const useLoginContext = () => {
  return useContext(LoginDetail);
};

export { LoginDetailProvider, useLoginContext };
