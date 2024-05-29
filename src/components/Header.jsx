import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  const [search, setSearch] = useState("");
  const [submit, setSubmit] = useState("");

  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    navigation(`/search/photos/${search}`);
  };

  return (
    <>
      <nav className="flex max-w-full justify-between items-center sticky top-0 bg-zinc-50 p-4">
        <Link to={"/"}>
          <img className="w-56" src="/Logo.svg" alt="Imperix logo" />
        </Link>
        {/* Search Bar */}
        <form
          className=" flex items-center justify-center"
          onSubmit={handleSubmit}
        >
          <input
            className="px-5 py-2 w-96 flex items-center justify-center rounded-tl-full rounded-bl-full bg-gray-200
            outline-none text-violet-700"
            type="search"
            value={search}
            placeholder="search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="bg-violet-600 px-5 py-2 rounded-tr-full rounded-br-full text-white"
            type="submit"
            onClick={() => setSubmit(search)}
          >
            Search
          </button>
        </form>
      </nav>
    </>
  );
}

export default Header;
