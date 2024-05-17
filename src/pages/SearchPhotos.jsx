import React from "react";
import unsplashApi from "../utils/api";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import MasonaryGrid from "../components/Main/MasonaryGrid";

function SearchPhotos() {
  let { query } = useParams();

  const { data } = useQuery({
    queryKey: ["photos", query],
    queryFn: () => unsplashApi.get(`/search/photos?query=${query}`),
    enabled: !!query,
    retry: false,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  // console.log(data);

  return (
    <>
      <MasonaryGrid param={data?.data} />
      <div>{query}</div>;
    </>
  );
}

export default SearchPhotos;

// 3 Component
// 1. Photos Masonary Grid
// 2. Tags
// 3. Stats Navbar
