import { useEffect, useState } from "react"
import Geneid from "../utility/GeniID"
import { MdDelete } from "react-icons/md";
function WatchList({watchList,setWatchList,handleDeleteWatchList}) {
  const[searchText,setSearchText]=useState("");
  const[genereList,SetGenereList]=useState(["All Genere"]);
  const[genere,Setgenere]=useState(['All Genere']);

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

  const handlegenere=(genList)=>{
    Setgenere(genList)
  }

  useEffect(()=>{
    const templist=watchList.map((movie)=>{
      return Geneid[movie.genre_ids[0]|| movie.genre_ids[1]]
    })
    SetGenereList(["All Genere",...new Set(templist)]);
    console.log(templist);
    
  },[watchList])
  return (

    <>
    <div className="flex flex-wrap justify-center gap-4 m-4">
      {genereList.map((genList,index )=>{
        return    <div key={index} onClick={()=>handlegenere(genList)} 
        className= {genere==genList ? "text-white  h-[3rem] cursor-pointer w-[7rem] flex items-center justify-center rounded-lg bg-blue-400":"text-white cursor-pointer  h-[3rem] w-[7rem] flex items-center justify-center rounded-lg bg-slate-400"}
        >{genList}</div>
      })}
      {/* <div className= "text-white  h-[3rem] w-[7rem] flex items-center justify-center rounded-lg bg-blue-400">Advanture</div>
      <div className= "text-white  h-[3rem] w-[7rem] flex items-center justify-center rounded-lg bg-gray-300">Action</div> */}

    </div>
    <div className="flex justify-center mt-4 ">
      <input onChange={handleSearchText} value={searchText}  placeholder="Search Movie" className=" h-8 outline-none py-3 px-4 w-72 bg-gray-300 text-black "></input>
    </div>

    <div className=" border-2 border-red-500 bg-gray-300 m-8 outline-none  ">
      <table className="w-full xsm:w-2/12  text-center">
        <thead >
             <tr >
              <th className="xsm:py-1 sm:py-1 md:py-2 lg:py-2">Name</th>
              
             <th className="flex justify-center items-center py-3">
               <div onClick={handleAscedningSort} className="mx-3 text-xl font-bold cursor-pointer">↑</div>
               <div>Rating</div>
               <div onClick={handleDescendingSort} className="mx-3 text-xl font-bold cursor-pointer">↓</div>

             </th>
           
             
              <th className="py-3">Popularity</th>
              <th className="py-3">Generic</th>
            </tr>
      
        </thead>
        <tbody className="border-2 border-red-400 rounded-2xl bg-gray-200 justify-center">
          {watchList.filter((movie)=>{
            if(genere=="All Genere"){
              return true;
            }
            return Geneid[movie.genre_ids[0]]===genere;
          }).filter((movie)=>{
            return movie.title.toLowerCase().includes(searchText.toLowerCase());
          }).map((movie)=>{
            return    <tr key={movie.id} className="">
            <td className="flex  items-center py-2 px-2 ">
              <img className="h-[6rem] w-[10rem] rounded-xl"  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
              <h5 className="px-8 sm:px-4 md:px-6 lg:px-8">{movie.title}</h5>
            </td>
        
            <td>{movie.vote_average}</td>
            <td>{movie.popularity}</td>
            <td>{Geneid[movie.genre_ids[0]]}</td>
            <td className="text-red-800  cursor-pointer text-xl" onClick={()=>handleDeleteWatchList(movie)}><MdDelete /></td>
          </tr>
          })}
         
        </tbody>

        
      </table>
    </div>
    </>
   
  )
}

export default WatchList