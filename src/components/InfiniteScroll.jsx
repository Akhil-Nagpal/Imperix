// import React, { useEffect, useState } from "react";
// import { useInView } from "react-intersection-observer";
// import pexelApi from "../utils/api";
// import { useInfiniteQuery } from "@tanstack/react-query";

// function InfiniteScroll({ url }) {
//   const [images, setImages] = useState([]);
//   const uniqueIds = new Set();

//   const fetchData = async ({ pageParam }) => {
//     const { data } = await pexelApi({
//       url: url,
//       params: {
//         page: pageParam,
//       },
//     });

//     return data?.photos;
//   };

//   const { ref, inView } = useInView();

//   const {
//     data,
//     status,
//     error,
//     fetchNextPage,
//     isFetchingNextPage,
//     hasNextPage,
//   } = useInfiniteQuery({
//     queryKey: ["images"],
//     queryFn: fetchData,
//     retry: 2,
//     initialPageParam: 1,
//     getNextPageParam: (_, allPages) => allPages.length + 1,
//   });

//   useEffect(() => {
//     let uniqueArray = data?.pages.flat(Infinity).filter((obj) => {
//       if (!uniqueIds.has(obj.id)) {
//         uniqueIds.add(obj.id);
//         return true;
//       }
//       return false;
//     });

//     setImages(uniqueArray);
//   }, [data]);

//   useEffect(() => {
//     if (inView && hasNextPage) {
//       fetchNextPage();
//     }
//   }, [inView, hasNextPage, fetchNextPage]);
//   console.log(images);
//   return images;
// }

// export default InfiniteScroll;
