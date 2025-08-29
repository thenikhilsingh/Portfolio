import ScrollToTop from "./components/ScrollToTop";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="bg-black h-[100vh] w-[100vw] ">
        <ScrollToTop />
        <Outlet />
        <NavBar />
      </div>
    </>
  );
}

export default App;
