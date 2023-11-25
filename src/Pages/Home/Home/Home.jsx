import { NavLink } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Packages from "../Packages/Packages";


const Home = () => {
    const {user}=useAuth()
    return (
        <div>
           
             {
        user?.email?<>
         <li>Hello Mama</li>
        </>
        :
       <div>

            <Banner></Banner>
            <Packages></Packages>
            <About></About>
            <Footer></Footer>
           
       </div>
           
          
        }
        </div>
    );
};

export default Home;