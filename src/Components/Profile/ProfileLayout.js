import React from "react";
import Headermain from "../Headermain";
import { Outlet } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <div>
      <Headermain />
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default ProfileLayout;
