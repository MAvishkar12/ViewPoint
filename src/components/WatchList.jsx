import { useEffect, useState } from "react"
import Geneid from "../utility/GeniID"
function WatchList({watchList,setWatchList}) {
  const[searchText,setSearchText]=useState("");
  const[genereList,SetGenereList]=useState(["All Generi"]);

  const handleSearchText=(e)=>{
     setSearchText(e.target.value)
  }
  const handleAscedningSort=()=>{
    const sortmovie=watchList.sort((movieA,movieB)=>movieA.vote_average-movieB.vote_average);
       setWatchList([...sortmovie]);
  }

  const handleDescendingSort=()=>{
    const sortmovie=watchList.sort((movieA,movieB)=>movieB.vote_average-movieA.vote_average);
    setWatchList([...sortmovie])
  }

  useEffect(()=>{
    const templist=watchList.map((movie)=>{
      return Geneid[movie.genre_ids[0]|| movie.genre_ids[1]]
    })
    SetGenereList(["All Generi",...new Set(templist)]);
    console.log(templist);
    
  },[watchList])
  return (

    <>
    <div className="flex flex-wrap justify-center gap-4 m-4">
      {genereList.map((genList,index )=>{
        return    <div key={index} className= "text-white  h-[3rem] w-[7rem] flex items-center justify-center rounded-lg bg-blue-400">{genList}</div>
      })}
      {/* <div className= "text-white  h-[3rem] w-[7rem] flex items-center justify-center rounded-lg bg-blue-400">Advanture</div>
      <div className= "text-white  h-[3rem] w-[7rem] flex items-center justify-center rounded-lg bg-gray-300">Action</div> */}

    </div>
    <div className="flex justify-center mt-4 ">
      <input onChange={handleSearchText} value={searchText}  placeholder="Search Movie" className=" h-8 outline-none px-4 w-72 bg-red-100 "></input>
    </div>

    <div className=" border-2 border-red-500 bg-gray-300 m-8 outline-none  ">
      <table className="w-full  text-center">
        <thead >
             <tr >
              <th className="py-3">Name</th>
              
             <th className="flex justify-center items-center py-3">
               <div onClick={handleAscedningSort} className="mx-3 text-xl font-bold cursor-pointer">↑</div>
               <div>Rating</div>
               <div onClick={handleDescendingSort} className="mx-3 text-xl font-bold cursor-pointer">↓</div>

             </th>
           
             
              <th className="py-3">Popularity</th>
              <th className="py-3">Generi</th>
            </tr>
      
        </thead>
        <tbody className="border-2 border-red-400  bg-gray-200 justify-center">
          {watchList.filter((movie)=>{
            return movie.title.toLowerCase().includes(searchText.toLowerCase());
          }).map((movie)=>{
            return    <tr key={movie.id} className="">
            <td className="flex  items-center py-2 px-2 ">
              <img className="h-[6rem] w-[10rem]"  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
              <h5 className="px-8">{movie.title}</h5>
            </td>
        
            <td>{movie.vote_average}</td>
            <td>{movie.popularity}</td>
            <td>{Geneid[movie.genre_ids[0]]}</td>
            <td className="text-red-800  cursor-pointer">Delete</td>
          </tr>
          })}
         
        </tbody>

        
      </table>
    </div>
    </>
   
  )
}

export default WatchList