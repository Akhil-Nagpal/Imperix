import React from "react";

function CollectionGrid({ imgSrc, title, tags }) {
  // console.log(imgSrc);
  return (
    <>
      <div className="my-4 w-[32%]">
        <div className="grid grid-flow-col w-[400px] aspect-[4/3] grid-rows-2 gap-1 rounded-lg">
          <div className="row-span-2">
            <img
              src={imgSrc?.[0]?.urls?.regular}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="col-span-1">
            <img
              src={imgSrc?.[1]?.urls?.small}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img
              src={imgSrc?.[2]?.urls?.small}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="my-2 titillium text-2xl ">{title}</div>
        <div className="flex gap-2 mt-2 flex-wrap">
          {tags?.map((tag) => {
            return (
              <span className="bg-gray-200 py-2 px-3 rounded-lg alegreya text-lg">
                {tag?.title}
              </span>
            );
          })}
        </div>
      </div>

      {/* <div className="bg-red-400 w-1/3 border-black border-2">
        <div className="grid grid-cols-3 h-[300px] overflow-hidden gap-1 rounded-lg border-green border-2">
          <img
            src={imgSrc?.[0]?.urls.regular}
            className="w-full h-full col-span-2"
          />
          <div className="grid grid-rows-2 gap-1">
            <div className="overflow-hidden object-cover h-[150px]">
              <img
                src={imgSrc?.[1]?.urls.small}
                className=" object-cover w-full h-full "
              />
            </div>
            <div className="overflow-hidden object-cover h-[150px]">
              <img
                src={imgSrc?.[2]?.urls.small}
                className=" object-cover w-full h-full "
              />
            </div>
          </div>
        </div>
        <h2 className="text-lg titillium">{title}</h2>
      </div> */}

      {/* <div className=" bg-red-400 grid grid-cols-2">
        <div>
          <img src={imgSrc?.[0]?.urls.small} alt="" />
        </div>
        <div className="flex flex-col">
          <div>
            <img src={imgSrc?.[1]?.urls.small} alt="" />
          </div>
          <div>
            <img src={imgSrc?.[2]?.urls.small} alt="" />
          </div>
        </div>
      </div>
      <div>{title}</div> */}

      {/* <div className="grid grid-cols-2 grid-rows-2">
        <img
          className="row-span-2 object-cover"
          src={imgSrc?.[0]?.urls?.regular}
          alt=""
        />
        <img src={imgSrc?.[1]?.urls?.regular} alt="" />
        <img src={imgSrc?.[2]?.urls?.regular} alt="" />
      </div> */}

      {/* <div className="">
        {imgSrc?.map((item) => {
          return <img src={item?.urls?.regular} />;
        })}
      </div> */}
    </>
  );
}

export default CollectionGrid;
