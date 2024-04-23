import { Outlet } from "react-router-dom";
import Navbar from "../Layout/Navbar";

const Root = () => {
  return (
    <div className="max-w-7xl m-auto">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="px-2 my-4 lg:p-0">
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </div>
  );
};

export default Root;
