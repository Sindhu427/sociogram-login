// import Sidenav from "./Navigationbar/sidenav";
// import { useNavigate } from 'react-router-dom';

import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function HomePage() {
  useEffect(() => {
    toast.success("Login SucessFull");
  }, []);
  return (
    <div>
      <h1>hello everybody!</h1>
      <ToastContainer />
    </div>
  );
}
