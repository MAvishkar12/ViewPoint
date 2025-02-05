import { useState } from "react";
import { FaBookmark } from "react-icons/fa6";
//https://api.themoviedb.org/3/movie/now_playing?api_key=e6f3682a7cf9c249098500bc5be0886b&language=en-US&page=1
function MovieCard({
  posterImg,
  title,
  movieObj,
  handleAddWatchList,
  handleDeleteWatchList,
  watchList,
}) {
  function docontain(movieObj) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <>
      <div
        className=" relative  h-60 w-40 pb-3 md:p-3 opacity-100 rounded-xl bg-center hover:scale-110 duration-300 hover:cursor-pointer  bg-cover shadow-lg"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${posterImg})`,
        }}
      >
        {docontain(movieObj) ? (
          <div
            onClick={() => handleDeleteWatchList(movieObj)}
            className="float-right text-white"
          >
            ✖
          </div>
        ) : (
          <div
            onClick={() => handleAddWatchList(movieObj)}
            className="float-right text-white"
          >
            <FaBookmark />

          </div>
        )}

       
      </div>
    </>
  );
}

export default MovieCard;
