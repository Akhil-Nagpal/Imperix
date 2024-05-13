import React, { useState } from "react";
import unsplashApi from "../../utils/api";

function Header() {
  const [search, setSearch] = useState("");
  const [submit, setSubmit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const getData = async () => {
      const data = await unsplashApi.get("/photos");
      console.log(data);
    };
    getData();
  };

  return (
    <>
      <h1 className="text-violet-700 text-3xl font-extrabold mb-2">
        Imperix Search Engine!
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          className="px-5 py-2 w-1/3 rounded-tl-full rounded-bl-full bg-gray-200
          outline-none text-violet-700"
          type="text"
          value={search}
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-violet-600 px-5 py-2 rounded-tr-full rounded-br-full text-white mb-4"
          type="submit"
          onClick={() => setSubmit(search)}
        >
          Search
        </button>
      </form>
    </>
  );
}

export default Header;
