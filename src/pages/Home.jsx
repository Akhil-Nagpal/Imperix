import React, { useState } from "react";
import unsplashApi from "../utils/api";
import MasonaryGrid from "../components/MasonaryGrid";
import { useInfiniteQuery } from "@tanstack/react-query";

function Home() {
  const fetchData = async ({ pageParam }) => {
    console.log(pageParam);
    const { data } = await unsplashApi({
      url: "/photos",
      params: {
        page: pageParam,
      },
    });
    console.log(data);
    return data;
  };

  const {
    data,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["images"],
    queryFn: fetchData,
    initialPageParam: 1,
    getNextPageParam: (_, allPages) => allPages.length + 1,
  });

  const allPhotos = data?.pages?.flat();

  return (
    <>
      <MasonaryGrid param={allPhotos} />

      <button
        className="bg-gray-200 text-lg py-2 px-4 rounded-lg"
        onClick={() => fetchNextPage()}
      >
        Load More
      </button>
    </>
  );
}

export default Home;

// 1. Navbar - Search Bar, Logo, Theme Toggler
// Secondary Navbar - Categories,
