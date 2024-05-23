import React from "react";
import { unsplashApi } from "../utils/api";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function Topic() {
  const fetchTopics = async () => {
    const { data } = await unsplashApi({
      url: "/topics",
      params: {
        page: 1,
        per_page: 20,
      },
    });
    return data;
  };

  const { data } = useQuery({
    queryKey: ["topics"],
    queryFn: fetchTopics,
  });

  return (
    <>
      <div className="flex gap-4 overflow-x-auto p-4 items-center no-scrollbar sticky top-[72px] bg-zinc-50 ">
        {data?.map((item) => {
          return (
            <NavLink key={item?.id} to={`/categories?t=${item?.slug}`}>
              <div>
                <h1 className="slider w-max text-center text-lg">
                  {item?.title}
                </h1>
              </div>
            </NavLink>
          );
        })}
        <div className=" bg-zinc-50 fixed w-10 h-12 flex items-center justify-center right-0">
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
        <div className=" bg-zinc-50 fixed w-10 h-12 flex items-center justify-center left-0">
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
      </div>
    </>
  );
}

export default Topic;

// import React, { useState } from "react";
// import { unsplashApi } from "../utils/api";
// import { useQuery } from "@tanstack/react-query";
// import { NavLink } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// function Topic() {
//   const fetchTopics = async () => {
//     const { data } = await unsplashApi({
//       url: "/topics",
//       params: {
//         page: 1,
//         per_page: 20,
//       },
//     });
//     return data;
//   };

//   const { data } = useQuery({
//     queryKey: ["topics"],
//     queryFn: fetchTopics,
//   });

//   // console.log(data);

//   return (
//     <>
//       <Swiper slidesPerView={7}>
//         {data?.map((item) => {
//           return (
//             <SwiperSlide>
//               <NavLink key={item?.id} to={`/categories/${item?.slug}`}>
//                 <div className="bg-red-500">
//                   <h1 className="bg-blue-400 w- grid place-items-center text-center">
//                     {item?.title}
//                   </h1>
//                 </div>
//               </NavLink>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </>
//   );
// }

// export default Topic;
