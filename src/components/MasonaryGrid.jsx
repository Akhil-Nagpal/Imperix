import React from "react";

function MasonaryGrid({ imgUrl, imgAlt }) {
  return (
    <>
      <div className="mb-4">
        <img className="h-auto w-full" src={imgUrl} alt={imgAlt} />
      </div>
    </>
  );
}

export default MasonaryGrid;

// param?.[0]?.photos?.map((item) => (
//   <ImageCard item={item} key={item.id} />
// ))

// const ImageCard = ({ item, className }) => {
//   return (
//     <div className={className}>
//       <img
//         // className="h-auto w-full object-cover rounded-md mb-4 "
//         src={item?.src?.large}
//         alt={item?.alt}
//       />
//     </div>
//   );
// };

// {
/* <div className="rows-2 md:columns-3 xl:columns-4 gap-4">
        {param?.photos
          ? param?.photos?.map((item) => {
              console.log(item.id);
              return (
                <ImageCard
                  className="h-auto w-full rounded-md mb-4"
                  item={item}
                  key={item.id}
                />
              );
            })
          : param?.flatMap((item) =>
              item?.photos?.map((photo, index) => {
                console.log(photo.alt);

                return (
                  <ImageCard
                    className="h-auto w-full rounded-md mb-4"
                    item={photo}
                    key={photo.id}
                  />
                );
              })
            )}
      </div> */
// }
