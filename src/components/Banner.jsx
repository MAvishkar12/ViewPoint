import hero from "../assets/hero.png"
function Banner() {
  return (
    <div
      className="  h-screen md:h-[80vh] sm:h-[60vh] opacity-100 bg-cover flex items-end "
    
     >
      <img  className="m-auto" src={hero} alt="Poster"></img>
     
    </div>
  );
}

export default Banner;
