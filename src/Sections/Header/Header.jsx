import './Header.css';
// import Man from '../../../src/assets/images/man.png';
import YellowButton from '../../Component/Buttons/Buttons';
import { FaAngleRight } from "react-icons/fa";

const Header = () => {
    return (
        <header>
            <div className="container">
            <div className="text">
               <h6>Posted on <span>startup</span></h6>
               <h1>Step-by-step guide to choosing <br/> great font pairs</h1>
               <h6>By <span className='color'>James West</span>  |  May 23, 2022 </h6>
               <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br/> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
               <div className='btn'>
               <YellowButton>Read More <FaAngleRight/></YellowButton>
               </div>
               </div>
            </div>
        </header>
            
    );
}

export default Header;
