
import Header from "./Components/common.jsx";
import React from "react";
import Home from "./Pages/Home.jsx"
import Newchallenge from "./Components/Newchallenge.jsx";
import Details from "./Pages/Challengedetails.js";

 import { BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Editchallenge from "./Pages/editChallenge.jsx";


export default function App() {
  return (
  
    <BrowserRouter basename="/dphi-hackathon"  >
    <div className="App">
      <Header />
          <Routes>
          <Route path="/createChallenge" element= {<Newchallenge />} />
          <Route path="/"   element={<Home />} />
          <Route path="/challenge/:challengeID" element={<Details />} />
             <Route path=  "/editChallenge/:challengeID" element = {<Editchallenge />} />
          </Routes> 

          </div>
        </BrowserRouter>
  );
}
