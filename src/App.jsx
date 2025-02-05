import Navbar from "./components/Navbar";

import Movies from "./components/Movies";
import WatchList from "./components/WatchList";

import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";

function App() {
  const [watchList, setWatchList] = useState([]);
  console.log(watchList);

  const handleAddWatchList = (movieObj) => {
    let newWatchList = [...watchList, movieObj];
    // store to local storage
    localStorage.setItem("movieapp", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  };

  const handleDeleteWatchList = (movieObj) => {
    let filterlist = watchList.filter((movie) => {
      return movie.id != movieObj.id;
    });
    localStorage.setItem("movieapp", JSON.stringify(filterlist));
    setWatchList(filterlist);
  };

  useEffect(() => {
    const localStoragemovie = localStorage.getItem("movieapp");

    if (!localStoragemovie) {
      return;
    }
    setWatchList(JSON.parse(localStoragemovie));
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Movies
              handleAddWatchList={handleAddWatchList}
              handleDeleteWatchList={handleDeleteWatchList}
              watchList={watchList}
            />
          }
        ></Route>
        <Route
          path="watchlist"
          element={
            <WatchList
              watchList={watchList}
              setWatchList={setWatchList}
              handleDeleteWatchList={handleDeleteWatchList}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
