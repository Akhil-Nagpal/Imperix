import React from "react";

function MasonaryGrid({ param }) {
  const ImageCard = ({ item }) => {
    return (
      <div>
        <img
          className="h-auto w-full rounded-md mb-4"
          src={item?.src?.large}
          alt={item?.alt}
        />
      </div>
    );
  };

  console.log(param);

  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-3 mb-4">
        {param?.photos
          ? param?.photos?.map((item) => (
              <ImageCard item={item} key={item.id} />
            ))
          : param?.[0]?.photos?.map((item) => (
              <ImageCard item={item} key={item.id} />
            ))}
      </div>
    </>
  );
}

export default MasonaryGrid;
