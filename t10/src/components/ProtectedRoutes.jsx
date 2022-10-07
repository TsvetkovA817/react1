import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../redux/reducers/userReducer/userSelector";
import Redirect2Login from "./Redirect2Login";

import { getAuth } from "firebase/auth";

const ProtectedRoutes = ({ children }) => {

  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    return <Redirect2Login />;
  }
  return children;
};
export default ProtectedRoutes;
