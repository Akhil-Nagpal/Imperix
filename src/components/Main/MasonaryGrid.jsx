import React from "react";

function MasonaryGrid({ param }) {
  console.log(param);
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {param?.results
          ? param?.results?.map((item) => (
              <div key={item.id}>
                <img
                  className="h-auto max-w-full rounded-md"
                  src={item?.urls?.full}
                  alt=""
                />
              </div>
            ))
          : param?.map((item) => (
              <div key={item.id}>
                <img
                  className="h-auto max-w-full rounded-md"
                  src={item?.urls?.full}
                  alt=""
                />
              </div>
            ))}
      </div>
    </>
  );
}

export default MasonaryGrid;
