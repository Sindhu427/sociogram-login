import TotalLoginPage from "./components/login-page/total.container";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home-page/Home-page";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LogoPage />}></Route> */}
        <Route path="/" element={<TotalLoginPage />}></Route>
        {/* <Route path="/SignIn" element={<SignIn />} /> */}
        <Route path="/HomePage" element={<HomePage />} />
        {/* <Route path="/SignUp" element={<SignUp />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
