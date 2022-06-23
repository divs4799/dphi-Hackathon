
import Header from "./Components/common.jsx";
import React from "react";
import Home from "./Pages/Home.jsx"
import Newchallenge from "./Components/Newchallenge.jsx";
import Details from "./Pages/Challengedetails.js";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
  
    <BrowserRouter >
    <div className="App">
      <Header />
          <Routes>
          <Route path="/createChallenge" element= {<Newchallenge />} />
          <Route path="/" element={<Home />} />
          <Route path="/challenge/:challengeID" element={<Details />} />
             
          </Routes> 

          </div>
        </BrowserRouter>
  );
}
