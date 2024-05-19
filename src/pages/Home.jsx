import React, { useState } from "react";
import unsplashApi from "../utils/api";
import MasonaryGrid from "../components/MasonaryGrid";
import { useQuery } from "@tanstack/react-query";

function Home() {
  const { data } = useQuery({
    queryKey: ["randomPhotos"],
    queryFn: () => unsplashApi.get(`/photos`),
    retry: 2,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <MasonaryGrid param={data?.data} />
    </>
  );
}

export default Home;

// 1. Navbar - Search Bar, Logo, Theme Toggler
// Secondary Navbar - Categories,
