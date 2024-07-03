/* eslint-disable react/prop-types */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ExempleJsx from "./components/view/ExempleJsx";
import Navbar from "./components/Navbar";
import { HookUseState } from "./components/view/HookUseState";
import { Flux } from "./components/view/Flux";
import { Formulaire } from "./components/view/Formulaire";

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
              <Route path="/flux" element={<Flux />} />
              <Route path="/formulaire" element={<Formulaire />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
