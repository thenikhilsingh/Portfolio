import ScrollToTop from "./components/ScrollToTop";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="bg-black h-[100vh] w-[100vw] flex ">
        <div className="size-full flex flex-col justify-center items-center">
          <div className="h-[90%] w-[65%] flex items-center">
            <ScrollToTop />
            <Outlet />
            <NavBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
