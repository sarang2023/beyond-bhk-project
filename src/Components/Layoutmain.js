import { Outlet } from "react-router-dom";
import Headermain from "./Headermain";
import Footer from "./Footer";

const Layoutmain = () => {
  return (
    <div>
      <Headermain />

      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};
export default Layoutmain;
