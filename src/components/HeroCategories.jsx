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
      <div className="w-2/4 h-72 flex flex-col items-start mt-20 gap-4">
        <h1 className="text-4xl playfair-display">{data?.title}</h1>
        <p className="text-xl alice-regular">{data?.description}</p>
      </div>
    </>
  );
}

export default HeroCategories;
