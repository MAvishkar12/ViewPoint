
import { BiSolidCameraMovie } from "react-icons/bi";
import { Link } from "react-router";

import { MdOutlineHome } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
function Navbar() {
  return (
    <nav className="flex gap-10 w-1/2 mx-auto mt-2 rounded-md sticky top-0 bg-slate-200 p-4">
      <div className="text-3xl text-red-950" >
      <BiSolidCameraMovie />
      </div>  
      <div> 
        <ul className="flex  ">
          <div className="flex gap-10">
          <div className="flex flex-col  items-center ">
          <Link to="/" className="font-bold text-3xl hover:text-white text-black  italic" ><MdOutlineHome/></Link>
     
          </div>
          <div className="flex flex-col  items-center mt-1 ">
             <Link to="/watchlist" className="font-bold text-2xl hover:text-white text-black  italic"><FaRegBookmark/></Link>
           
          </div>
          </div>

        
        </ul>
     
      </div>
      <div className="ml-auto mt-2 text-xl"><FaUser/></div>
    </nav>
  )
}

export default Navbar