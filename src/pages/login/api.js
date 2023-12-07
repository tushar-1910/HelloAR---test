import axios from "axios";

const API_ENDPOINT = "https://dev.api.goongoonalo.com/v1";

export const handleVerifyOtp = async (otp, phoneNumber, requestId) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/auth/verify_otp`, {
      otp,
      phoneNumber,
      requestId,
    });
    return response;
  } catch (error) {
    alert("something went wrong");
    console.error("Error in verifying OTP:", error);
  }
};

export const handleLogin = async (phoneNumber) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/auth/login`, {
      phoneNumber,
    });
    return response;
  } catch (error) {
    alert("something went wrong");
    console.error("Error during login:", error);
  }
};
