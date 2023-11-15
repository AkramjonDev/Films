import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
function MainLayoutInner() {
  return (
    <div>
      <Navbar />
      <main className="align-elements mx-auto mb-10">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayoutInner;
