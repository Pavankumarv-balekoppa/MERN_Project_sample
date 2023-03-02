// const Banner = (props) => {
//     let title = props.data
//     return ( 
//         <div className="banner d-flex align-items-center justify-content-center">
//             <div className="title">
//             <img src="/images/burger2.jpg" alt="" />
                
//                 <h1 className="text-center text-dark fs-1 fs-gb-1">{title}</h1>
//             </div>
//         </div>
//      );
// }
 
// export default Banner;

import { Link } from "react-router-dom";
import '../styles/banner.css';
const Banner = ({ data }) => {
    return (
        <div className="banner row align-items-end" >
            <div className="infoo text-center pb-5"  >
                
                <h1 className="text text-light fw-bolder " style={{ fontFamily: "Playfair Display", fontSize: "64px", marginTop:'300px' }}>{data}</h1>
                <Link to="/" className="text-decoration-none text-light fs-5">Home &gt;</Link>
            </div>
        </div>
    );
}

export default Banner;