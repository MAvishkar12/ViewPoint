import Banner from "./Banner";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import ShimerUI from "./ShimerUI";
function Movies({ handleAddWatchList, handleDeleteWatchList, watchList }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=e6f3682a7cf9c249098500bc5be0886b&language=en-US&page=${page}`
      )
      .then((respond) => {
        let moviedata = respond.data.results;
        setMovies(moviedata);
        console.log(movies);
      });
  }, [page]);

  return (
    <div>
      <Banner  />
      <h1 className="text-center w-3/12 p-3 mx-auto  sm:my-4 lg:my-4 bg-gray-400 text-white text-2xl font-semibold ">
       All Movies
      </h1>
      <div className="flex flex-wrap mt-4 justify-center gap-5 mx-4 max-h-screen ">
        { movies.length===0?<ShimerUI/>: movies.map((movieObj) => (
          <MovieCard
            key={movieObj.id}
            movieObj={movieObj}
            posterImg={movieObj?.poster_path}
            title={movieObj.title}
            handleAddWatchList={handleAddWatchList}
            handleDeleteWatchList={handleDeleteWatchList}
            watchList={watchList}
          />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default Movies;
