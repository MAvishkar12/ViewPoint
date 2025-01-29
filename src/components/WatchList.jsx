

function WatchList({watchList}) {
  return (

    <>
    <div className="flex flex-wrap justify-center gap-4 m-4">
      <div className= "text-white  h-[3rem] w-[7rem] flex items-center justify-center rounded-lg bg-blue-400">Advanture</div>
      <div className= "text-white  h-[3rem] w-[7rem] flex items-center justify-center rounded-lg bg-gray-300">Action</div>

    </div>
    <div className="flex justify-center mt-4 ">
      <input placeholder="Search Movie" className=" h-8 outline-none px-4 w-72 bg-red-100 "></input>
    </div>

    <div className=" border-2 border-red-500 bg-gray-300 m-8 outline-none  ">
      <table className="w-full  text-center">
        <thead >
             <tr >
              <th className="py-3">Name</th>
              <th className="py-3">Rating</th>
              <th className="py-3">Popularity</th>
              <th className="py-3">Generi</th>
            </tr>
      
        </thead>
        <tbody className="border-2 border-red-400  bg-gray-200 justify-center">
          {watchList.map((movie)=>{
            return    <tr key={movie.id} className="">
            <td className="flex  items-center py-2 px-2 ">
              <img className="h-[6rem] w-[10rem]"  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
              <h5 className="px-8">{movie.title}</h5>
            </td>
        
            <td>{movie.vote_average}</td>
            <td>{movie.popularity}</td>
            <td>Action</td>
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