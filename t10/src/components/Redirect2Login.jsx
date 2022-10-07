import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Redirect2Login = () => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    count === 0 && navigate("/login");
    return () => clearInterval(interval);
  }, [count, navigate]);

  return (
    <div>
      <p>Переход на страницу входа через {count} seconds</p>
    </div>
  );
};

export default Redirect2Login;
