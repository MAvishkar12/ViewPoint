
import Navbar from "./components/Navbar"

import Movies from "./components/Movies";
import WatchList from "./components/WatchList";

import { Routes ,Route} from "react-router";
function App() {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Movies/>}></Route>
      <Route path="watchlist" element={<WatchList/>}></Route>
    </Routes>
   
    </>
  )
}

export default App
