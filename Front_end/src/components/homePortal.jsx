import { Route, Routes} from "react-router-dom";
import About from "./about";
import AddPost from "./addPost";
import Home from "./home";
import Navbar from "./navbar";
const HomePortal = () => {
    return ( 
        <div className="homePortal">
                <Navbar/>
            <Routes>
                
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/addPost" element={<AddPost/>}/>
               
            </Routes>
        </div>
        
     );
}
 
export default HomePortal;