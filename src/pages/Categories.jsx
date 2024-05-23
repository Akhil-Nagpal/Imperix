import React, { useEffect, useState } from "react";
import Topic from "../components/Topic";
import { unsplashApi } from "../utils/api";
import { useLocation } from "react-router-dom";
import MasonaryGrid from "../components/MasonaryGrid";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";

function Categories() {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("t");

  console.log(searchQuery);

  const fetchTopic = async ({ pageParam }) => {
    const { data } = await unsplashApi({
      url: `/topics/${searchQuery}/photos`,
      params: {
        page: pageParam,
      },
    });
    // console.log(data);
    return data;
  };
  useEffect(() => {
    fetchTopic();
  }, [searchQuery]);

  //   return (
  //     <>
  //       <Topic />
  //       {data?.map((topic) => (
  //         <div>
  //           <MasonaryGrid key={topic.id} topic={topic} />
  //         </div>
  //       ))}
  //     </>
  //   );
  // }

  const [images, setImages] = useState([]);
  const uniqueIds = new Set();

  // const fetchData = async ({ pageParam }) => {
  //   const { data } = await pexelApi({
  //     url: "/curated",
  //     params: {
  //       page: pageParam,
  //     },
  //   });

  //   return data?.photos;
  // };

  const { ref, inView } = useInView();

  const {
    data,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["images", searchQuery],
    queryFn: fetchTopic,
    retry: 2,
    initialPageParam: 1,
    getNextPageParam: (_, allPages) => allPages.length + 1,
  });

  console.log(data);

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
          console.log(item);
          return <MasonaryGrid key={item?.id} imgUrl={item?.urls?.regular} />;
        })}
      </div>

      {isFetchingNextPage && (
        <div className="flex justify-center items-center h-80">Loading...</div>
      )}
      <div className="w-10 h-10" ref={ref}></div>
    </>
  );
}

export default Categories;

// 3 Components -
// 1. Hero Banner
// 2. Masonary Grid
// 3. Tags
