
import Navbar from "./components/Navbar"

import Movies from "./components/Movies";
import WatchList from "./components/WatchList";

import { Routes ,Route} from "react-router";
import { useState } from "react";

function App() {
  const [watchList,setWatchList]=useState([])


  const handleAddWatchList=(movieObj)=>{
    
    
             let newWatchList=[...watchList,movieObj]
             setWatchList(newWatchList);
             console.log(watchList);
             
           console.log(watchList.length);
           
       
             
       }

       
    const handleDeleteWatchList=(movieObj)=>{
      let filterlist=watchList.filter((movie)=>{
       return movie.id!=movieObj.id
      })
      setWatchList(filterlist)
      console.log(watchList);
      
      console.log(watchList.length);
      
 
   
    }   


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Movies 
      handleAddWatchList={handleAddWatchList} 
      handleDeleteWatchList={handleDeleteWatchList}
      watchList={watchList}
      />}   ></Route>
      <Route path="watchlist" element={<WatchList watchList={watchList} />}   ></Route>
    </Routes>
   
    </>
  )
}

export default App
