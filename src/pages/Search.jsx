import React from "react";
import { Outlet } from "react-router-dom";

function Search() {
  return (
    <>
      <div>Search</div>
      <Outlet />
    </>
  );
}

export default Search;

// 4 compoenets needed -
// 1. Stats Navbar
// 2. Tags
// 3. Masonary grid
// 4. Search Bar with Color Picker tool
