/* eslint-disable react/prop-types */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ExempleJsx from "./components/view/ExempleJsx";
import Navbar from "./components/Navbar";
import { HookUseState } from "./components/view/HookUseState";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="app-container">
          <div className="app">
            <Routes>
              <Route path="/" element={<ExempleJsx />} />
              <Route path="/use-state" element={<HookUseState />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
