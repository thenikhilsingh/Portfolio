import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { createContext, useState } from "react";

export const darkModeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <darkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
      </darkModeContext.Provider>
    </>
  );
}

export default App;
