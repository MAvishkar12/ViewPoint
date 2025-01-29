import Banner from "./Banner";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
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
      <Banner />
      <h1 className="text-center mt-4 text-violet-700 text-xl italic ">
        Trending Movies
      </h1>
      <div className="flex flex-wrap mt-4 gap-5 mx-4 max-h-screen ">
        {movies.map((movieObj) => (
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
