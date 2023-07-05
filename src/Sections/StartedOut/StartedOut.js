import './StartedOut.css'
import frendsImge from '../../assets/images/man-wearing-sunglasses.png'
import YellowButton from '../../Component/Buttons/Buttons';
import { FaAngleRight } from "react-icons/fa";

const StartedOut = () => {
    return (
        <div className='container'>
            <div className="frends pt-5">
                    <div className="frends-img">
                        <img src={frendsImge} alt="" />
                    </div>

                <div className="divText">
                        <h6>Why we started </h6>
                        <h2>It started out as a simple idea and evolved into our passion</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                        <YellowButton>Discover our story <FaAngleRight/></YellowButton>
                </div>
            </div>
        </div>
    );
}

export default StartedOut;
