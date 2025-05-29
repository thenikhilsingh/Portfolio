import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import Skills from "./components/Skills.jsx";
import Works from "./components/Works.jsx";
import Resume from "./components/Resume.jsx";
import Contact from "./components/Contact.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />}></Route>
      <Route path="skills" element={<Skills />}></Route>
      <Route path="works" element={<Works />}></Route>
      <Route path="resume" element={<Resume />}></Route>
      <Route path="contact" element={<Contact />}></Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
