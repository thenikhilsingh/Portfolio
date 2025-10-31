import ScrollToTop from "./components/ScrollToTop";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import MobileNavbar from "./components/MobileNavbar";

function App() {
  return (
    <>
      <div className="bg-black h-[100vh] w-[100vw] flex ">
        <div className="size-full flex flex-col justify-center items-center">
          <div className="h-full lg:h-[90%] w-full md:w-[100%] lg:w-[97%] xl:w-[65%] flex flex-col md:flex-row items-center">
            <ScrollToTop />
            <Outlet />
            <NavBar />
            <MobileNavbar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
