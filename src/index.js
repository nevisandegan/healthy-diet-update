import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Header,How,Cards,Comments,Price,Cta,Hero} from "./components"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header/>}>
      <Route path="/" element={<Hero/>}/>
      <Route path="/how" element={<How/>}/>
      <Route path="/food" element={<Cards/>}/>
      <Route path="/Comments" element={<Comments />}/>
      <Route path="/Price" element={<Price />}/>
      <Route path="/Cta" element={<Cta/>}/>
      </Route>
    </Routes>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
