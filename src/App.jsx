/* eslint-disable react/prop-types */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ExempleJsx from "./components/view/ExempleJsx";
import Navbar from "./components/Navbar";
import { HookUseState } from "./components/view/HookUseState";
import { Flux } from "./components/view/Flux";
import { Formulaire } from "./components/view/Formulaire";
import { Exercice } from "./components/view/Exercice";
import { HookUseEffect } from "./components/view/HookUseEffect";
import { RequeteApi } from "./components/view/RequeteApi";
import { HookUseMemo } from "./components/view/HookUseMemo";

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
              <Route path="/hook-use-effect" element={<HookUseEffect />} />
              <Route path="/requete-api" element={<RequeteApi />} />
              <Route path="/hook-use-memo" element={<HookUseMemo />} />
              <Route path="/exercice" element={<Exercice />} />
              <Route path="*" element={<h1>404</h1>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
