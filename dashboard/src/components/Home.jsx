import React , {useEffect} from "react";
import axios from "axios";


import Dashboard from "./Dashboard.jsx";
import TopBar from "./TopBar.jsx";

const Home = () => {
  useEffect(() => {
    axios.get("http://localhost:3000/", { withCredentials: true })
    .then((res) => {
      console.log(res.data);
    }).catch((err) => {
      // If unauthorized → redirect to login
      if (err.response && err.response.status === 401) {
        console.log(err.response.data.message);
        window.location.href = "http://localhost:5173/login";
      }
    });
  }, []);
  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;