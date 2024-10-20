import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import MasonaryGrid from "../components/MasonaryGridCom";
import { pexelApi } from "../utils/api";
import { useInView } from "react-intersection-observer";
import Masonry from "react-responsive-masonry";

function SearchPhotos() {
  let { query } = useParams();

  const [images, setImages] = useState([]);

  const uniqueIds = new Set();

  const fetchData = async ({ pageParam }) => {
    const { data } = await pexelApi({
      url: "/search",
      params: {
        query: query,
        page: pageParam,
      },
    });

    return data?.photos;
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
    queryKey: ["images", query],
    queryFn: fetchData,
    retry: 2,
    initialPageParam: 1,
    getNextPageParam: (_, allPages) => allPages.length + 1,
  });

  useEffect(() => {
    let uniqueArray = data?.pages.flat(Infinity).filter((obj) => {
      if (!uniqueIds.has(obj.id)) {
        uniqueIds.add(obj.id);
        return true;
      }
      return false;
    });

    setImages(uniqueArray);
  }, [data]);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <>
      <h1 className="text-4xl font-bold capitalize">{query}</h1>
      {/* <div className="columns-2 md:columns-3 2xl:columns-4"> */}
      <Masonry columnsCount={4} gutter="10px">
        {images?.map((item) => (
          <MasonaryGrid
            key={item?.id}
            imgUrl={item?.src?.large}
            imgAlt={item?.alt}
          />
        ))}
      </Masonry>

      {/* </div> */}

      {isFetchingNextPage && (
        <div className="flex justify-center items-center h-80">Loading...</div>
      )}
      <div className="w-10 h-10" ref={ref}></div>
    </>
  );
}

export default SearchPhotos;

// 3 Component
// 1. Photos Masonary Grid
// 2. Tags
// 3. Stats Navbar

// const { data: search } = useQuery({
//   queryKey: ["photos", query],
//   queryFn: () => pexelApi.get(`/search?query=${query}`),
//   enabled: !!query,
//   retry: false,
//   staleTime: Infinity,
//   refetchOnMount: false,
//   refetchOnWindowFocus: false,
// });

// console.log(search);
