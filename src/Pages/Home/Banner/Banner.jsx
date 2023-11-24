import { Link } from "react-router-dom";


const Banner = () => {
    return (
        
            <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/vwqY2d1/pexels-august-de-richelieu-4427430.jpg" className="w-full" />
    <div className="absolute flex items-center h-full gap-5 left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
    <div className='text-white items-center text-center justify-center space-y-7 pl-12 '>
            <h2 className='text-6xl py-5 lg:ml-36 text-center font-bold '>Elevate Your Finances: Expert Asset Management Solutions</h2>
            {/* <p className="text-center py-2">There are many variations of passages of  available, but the majority have suffered alteration in some form</p> */}
            <div className=' py-5 text-center mx-auto'>
            <Link to="/joinAdmin"><button className="btn btn-primary mr-5 ">Join as Admin</button></Link>
            <Link to="/joinEmployee"><button className="btn btn-outline btn-primary pr-5">Join as Employee</button></Link>
            </div>
         </div>
    </div>
    
    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    
    
    
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/PQQ7mv3/pexels-edmond-dant-s-4342493.jpg" className="w-full" />
    <div className="absolute flex items-center h-full gap-5 left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
    <div className='text-white space-y-7 pl-12 '>
    <h2 className='text-6xl py-5 lg:ml-36 text-center font-bold '>Precision Wealth Management for a Prosperous Tomorrow</h2>
            {/* <p className="text-center py-2">There are many variations of passages of  available, but the majority have suffered alteration in some form</p> */}
            <div className=' py-5 text-center mx-auto'>
            <Link to="/joinAdmin"><button className="btn btn-primary mr-5 ">Join as Admin</button></Link>
            <Link to="/joinEmployee"><button className="btn btn-outline btn-primary pr-5">Join as Employee</button></Link>
            </div>
         </div>
    </div>
    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    
  </div> 
  
  
</div>
        
    );
};

export default Banner;