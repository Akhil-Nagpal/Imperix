import React, { useEffect, useState } from "react";
import MasonaryGrid from "../components/MasonaryGrid";
import { useInfiniteQuery } from "@tanstack/react-query";
import { pexelApi } from "../utils/api";
import { useInView } from "react-intersection-observer";
import Topic from "../components/Topic";

function Home() {
  const [images, setImages] = useState([]);

  const uniqueIds = new Set();

  const fetchData = async ({ pageParam }) => {
    const { data } = await pexelApi({
      url: "/curated",
      params: {
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
    queryKey: ["images"],
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
      <Topic />
      <div className="columns-2 md:columns-3 2xl:columns-4">
        {images?.map((item) => {
          // console.log(images);
          return (
            <MasonaryGrid
              key={item?.id}
              imgUrl={item?.src?.large}
              imgAlt={item?.alt}
            />
          );
        })}
      </div>

      {isFetchingNextPage && (
        <div className="flex justify-center items-center h-80">Loading...</div>
      )}
      <div className="w-10 h-10" ref={ref}></div>
    </>
  );
}

export default Home;

//
// Secondary Navbar - Categories - title, tags and grid
