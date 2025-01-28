

function WatchList() {
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
          <tr className="">
            <td className="flex  items-center py-2 px-2 ">
              <img className="h-[6rem] w-[10rem]"  src="https://images.ottplay.com/images/marco-official-poster-1735321194.jpg?impolicy=ottplay-202410&width=1200&height=675"></img>
              <h5 className="px-8">Marco</h5>
            </td>
        
            <td>7.5</td>
            <td>704K</td>
            <td>Action</td>
            <td className="text-red-800  cursor-pointer">Delete</td>
          </tr>
        </tbody>

        <tbody className="bg-gray-200 justify-center">
          <tr className="">
            <td className="flex  items-center py-2 px-2 ">
              <img className="h-[6rem] w-[10rem]"  src="https://images.ottplay.com/images/marco-official-poster-1735321194.jpg?impolicy=ottplay-202410&width=1200&height=675"></img>
              <h5 className="px-8">Marco</h5>
            </td>
        
            <td>7.5</td>
            <td>704K</td>
            <td>Action</td>
            <td className="text-red-800  cursor-pointer">Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
   
  )
}

export default WatchList