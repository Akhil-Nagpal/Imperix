import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import MasonaryGrid from "../components/MasonaryGrid";
import pexelApi from "../utils/api";

function SearchPhotos() {
  let { query } = useParams();

  const { data: search } = useQuery({
    queryKey: ["photos", query],
    queryFn: () => pexelApi.get(`/search?query=${query}`),
    enabled: !!query,
    retry: false,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  console.log(search);

  return (
    <>
      <h1 className="text-4xl font-bold capitalize">{query}</h1>
      <MasonaryGrid param={search?.data} />
    </>
  );
}

export default SearchPhotos;

// 3 Component
// 1. Photos Masonary Grid
// 2. Tags
// 3. Stats Navbar
