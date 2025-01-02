
import { BiSolidCameraMovie } from "react-icons/bi";
import { Link } from "react-router";
function Navbar() {
  return (
    <nav className="flex gap-10  bg-slate-200 p-4">
      <div className="text-3xl text-red-950" >
      <BiSolidCameraMovie />
      </div>  
      <div>
        <ul className="flex gap-5">
        <Link to="/" className="font-bold text-red-500 text-xl italic" >Movies</Link>
        <Link to="/watchlist" className="font-bold text-red-500 text-xl italic">WatchList</Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar