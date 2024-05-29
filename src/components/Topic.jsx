import React from "react";
import { unsplashApi } from "../utils/api";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import { useLocation } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";

function Topic() {
  const scroll = useRef();

  const [left, setLeft] = useState();
  const [right, setRight] = useState();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const topic = searchParams.get("t");

  const handleLeft = () => {
    scroll.current.scrollLeft -= 400;
    // console.log(scroll.current.scrollLeft);
  };

  const handleRight = () => {
    scroll.current.scrollLeft += 400;
    // console.log(scroll.current.scrollLeft);
  };

  const fetchTopics = async () => {
    const { data } = await unsplashApi({
      url: "/topics",
      params: {
        page: 1,
        per_page: 20,
      },
    });
    console.log(data);
    return data;
  };

  const { data } = useQuery({
    queryKey: ["topics"],
    queryFn: fetchTopics,
  });

  return (
    <>
      <div
        ref={scroll}
        className="flex gap-8 bg-zinc-50 overflow-x-auto py-4 px-8 items-center no-scrollbar sticky top-[72px] border-[#3333] border-b"
      >
        {data?.map((item) => {
          return (
            <NavLink
              className={item?.slug === topic ? "bg-green-500" : ""}
              key={item?.id}
              to={`/categories?t=${item?.slug}`}
            >
              <h1 className="w-max text-center text-lg alegreya text-gray-700">
                {item?.title}
              </h1>
            </NavLink>
          );
        })}

        <div
          onClick={handleRight}
          className=" bg-gradient-to-r from-transparent via-zinc-50 to-zinc-50 fixed w-20 h-12 flex items-center justify-end right-0 px-4"
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
        <div
          onClick={handleLeft}
          className=" bg-gradient-to-r from-zinc-50 via-zinc-50 to-transparent fixed w-20 h-12 flex items-center justify-start left-0 px-4 "
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
      </div>
    </>
  );
}

export default Topic;

// const buttonRight = document.getElementById("slideRight");
// const buttonLeft = document.getElementById("slideLeft");

// buttonRight.onclick = function () {
//   document.getElementById("container").scrollLeft += 20;
// };
// buttonLeft.onclick = function () {
//   document.getElementById("container").scrollLeft -= 20;
// };

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
