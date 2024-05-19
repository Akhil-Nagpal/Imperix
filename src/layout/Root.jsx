import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Header />
      <main>
        <div className=" mx-4">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Root;
