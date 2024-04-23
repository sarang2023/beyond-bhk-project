import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Login from "./LoginFolder/Login";
import ForgotPassword from "./LoginFolder/ForgotPassword";
import Verifycode from "./LoginFolder/Verifycode";
import SetNewPassword from "./LoginFolder/SetNewPassword";
import SignUp from "./LoginFolder/SignUp";
import Plot01 from "./PostYourProperty/Plot01";
import Shop from "./PostYourProperty/Shop";
import Factory from "./PostYourProperty/Factory";
import Plot02 from "./PostYourProperty/Plot02";
import Villa01 from "./PostYourProperty/Villa01";
import Villa02 from "./PostYourProperty/Villa02";
import BasicDetail from "./PostYourProperty/BasicDetail";
import PhotosVideos from "./PostYourProperty/PhotosVideos";
import Facilities from "./PostYourProperty/Facilities";
import Facilities02 from "./PostYourProperty/Facilities02";
import Layoutmain from "./Components/Layoutmain";
import About from "./Components/About";
import Home from "./Components/Home";
import Services01 from "./Components/Services/Services01";
import Interior from "./Components/Services/Interior";
import Architect from "./Components/Services/Architect";
import Lawyer from "./Components/Services/Lawyer";
import Engineer from "./Components/Services/Engineer";
import InternalPage from "./Components/InternalPage";
import Career from "./Components/Career";
import Contact from "./Components/Contact";
import Filter from "./Components/Filter";
import ProfileLayout from "./Components/Profile/ProfileLayout";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="plot01" element={<Plot01 />} />
          <Route path="shop" element={<Shop />} />
          <Route path="factory" element={<Factory />} />
          <Route path="plot02" element={<Plot02 />} />
          <Route path="villa01" element={<Villa01 />} />
          <Route path="villa02" element={<Villa02 />} />
          <Route path="basicdetail" element={<BasicDetail />} />
          <Route path="photos" element={<PhotosVideos />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="facilities02" element={<Facilities02 />} />
        </Route>

        <Route path="" element={<ProfileLayout />}>
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="" element={<Layoutmain />}>
          <Route index element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="home" element={<Home />} />
          <Route path="services01" element={<Services01 />} />
          <Route path="interior" element={<Interior />} />
          <Route path="architect" element={<Architect />} />
          <Route path="lawyer" element={<Lawyer />} />
          <Route path="engineer" element={<Engineer />} />
          <Route path="internal1" element={<InternalPage />} />
        </Route>
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="login" element={<Login />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="verifycode" element={<Verifycode />} />
        <Route path="setnewpassword" element={<SetNewPassword />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
