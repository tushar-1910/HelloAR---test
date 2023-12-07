import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = () => {
    const token = localStorage.getItem("authToken");
    return token !== null;
  };
  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/");
    }
  }, [navigate]);

  if (!isAuthenticated()) {
    return null;
  }
  return children;
};

export default PrivateRoute;
