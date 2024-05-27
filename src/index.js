import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Tehran from "./component/Tehran";
import Mashhad from "./component/mashhad";
import Shiraz from "./component/shiraz";
import Home from "./component/Homepage";

import { BrowserRouter , Route , Routes } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}  >
          <Route path="/Home" element={<Home />} ></Route>
          <Route path="/Tehran" element={<Tehran />} ></Route>
          <Route path="/mashhad" element={<Mashhad />} ></Route>
          <Route path="/Shiraz" element={<Shiraz />} ></Route>
        </Route>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);