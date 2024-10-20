import React from "react";
import CollectionGrid from "../components/CollectionGrid";
import { unsplashApi } from "../utils/api";
import { queryOptions, useInfiniteQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function SearchCollections() {
  const { query } = useParams();
  // console.log(query);
  // console.log(CollectionGrid);

  const fetchData = async ({ pageParam }) => {
    const { data } = await unsplashApi({
      url: "/search/collections",
      params: {
        query: query,
        per_page: 12,
        page: pageParam,
      },
    });
    // console.log(data);
    return data;
  };

  const { ref, inView } = useInView();

  const {
    data,
    error,
    status,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["collections", query],
    queryFn: fetchData,
    retry: 2,
    initialPageParam: 1,
    getNextPageParam: (_, allPages) => allPages.length + 1,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);
  // console.log(data);
  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center">
        {data?.pages?.map((collection) => {
          return collection?.results?.map((item) => {
            // console.log(item);
            return (
              <CollectionGrid
                key={item?.id}
                imgSrc={item?.preview_photos}
                title={item?.title}
                tags={item?.tags}
              />
            );
          });
        })}
      </div>
      {isFetchingNextPage && (
        <div className="flex justify-center items-center h-80">Loading...</div>
      )}
      <div className="w-10 h-10" ref={ref}></div>

      {/* <CollectionGrid imgSrc= title= tags={} /> */}
    </>
  );
}

export default SearchCollections;

// 3 Componenets -
// 1. Collection Grid
// 2. Tags
// 3. Stats Navbar

// return (
//   <CollectionGrid
//     imgSrc={collection?.cover_photo}
//     title={collection?.title}
//     tags={collection?.tags}
//   />
// );
