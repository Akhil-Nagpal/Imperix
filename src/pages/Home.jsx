import React, { useEffect } from "react";
import MasonaryGrid from "../components/MasonaryGrid";
import { useInfiniteQuery } from "@tanstack/react-query";
import pexelApi from "../utils/api";
import { useInView } from "react-intersection-observer";

function Home() {
  const fetchData = async ({ pageParam }) => {
    const { data } = await pexelApi({
      url: "/curated",
      params: {
        page: pageParam,
      },
    });

    return data;
  };

  const { ref, inView } = useInView();

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

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <>
      <MasonaryGrid param={data?.pages} />

      <button
        ref={ref}
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
