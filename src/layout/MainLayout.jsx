import { useState, useEffect } from "react";
import SignUp from "../pages/SignUp";
import MainLayoutInner from "./MainLayoutInner";
import Login from "../pages/Login";

const MainLayout = () => {
  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);
  const localSignUp = localStorage.getItem("signUp");
  const localEmail = localStorage.getItem("email");

  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
    }
    if (localEmail) {
      setShow(true);
    }
  });
  return (
    <div>{showHome ? <MainLayoutInner /> : show ? <Login /> : <SignUp />}</div> 
  );
}

export default MainLayout;
