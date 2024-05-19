import React from "react";

function MasonaryGrid({ param }) {
  console.log(param);
  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-3 mb-4">
        {param?.results
          ? param?.results?.map((item) => (
              <div key={item.id}>
                <img
                  className="h-auto w-full rounded-md mb-4"
                  src={item?.urls?.thumb}
                  alt={item?.alt_description}
                />
              </div>
            ))
          : param?.map((item) => (
              <div key={item.id}>
                <img
                  loading="lazy"
                  className="h-auto w-full rounded-md mb-4"
                  src={item?.urls?.thumb}
                  alt={item?.alt_description}
                />
              </div>
            ))}
      </div>
    </>
  );
}

export default MasonaryGrid;
