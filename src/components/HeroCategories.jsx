import { useQuery } from "@tanstack/react-query";
import React from "react";
import { unsplashApi } from "../utils/api";

function HeroCategories({ topic }) {
  const fetchCategories = async () => {
    const { data } = await unsplashApi.get(`/topics/${topic}`);
    console.log(data);
    return data;
  };

  const { data } = useQuery({
    queryKey: ["categories", topic],
    queryFn: fetchCategories,
  });

  return (
    <>
      <div className="flex justify-between">
        <div className="w-2/3 h-72 flex flex-col items-start mt-28 gap-4">
          <h1 className="text-4xl playfair-display">{data?.title}</h1>
          <p className="text-xl alice-regular">{data?.description}</p>
        </div>

        <div className="border-[1px] border-gray-400 rounded-lg w-1/3 m-8 px-5 py-2">
          <h1 className="text-lg titillium py-2">Top Contributers</h1>
          {data?.top_contributors?.map((contributor) => (
            <div className="flex gap-4 my-2">
              <div>
                <img
                  className="rounded-full"
                  src={contributor?.profile_image?.small}
                />
              </div>
              <div className="alice-regular text-md text-gray-900">
                <h2>{contributor?.name}</h2>
                <h3 className="titillium-web-regular text-sm text-gray-500">
                  {contributor?.username}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HeroCategories;
