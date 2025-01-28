import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

function Pagination({page,setPage}) {
  return (
    <div className='w-full flex my-4  bg-slate-500 justify-center gap-3'>
        <div onClick={()=>{ setPage(page>1?page-1:page=1)}} className="text-center my-2"><FaArrowLeft></FaArrowLeft></div>
         <div className="text-center mt-1 text-xl">{page}</div>
         <div onClick={()=>{setPage(page+1)}} className="text-center my-2"><FaArrowRight></FaArrowRight></div>
    </div>
  )
}

export default Pagination