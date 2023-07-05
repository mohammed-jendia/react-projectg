import './FeaturedPost.css';
import { FaAngleRight } from 'react-icons/fa';
import YellowButton from '../../../../Component/Buttons/Buttons';
import man from '../../../../assets/images/man-in-white-drese.png'

const FeaturedPost = () => {
    return (
        <div className='Featured-parent '>
            <div className="container Featured-child">
            <div className="row">
            <div className="col-lg-7 col-md-6">
            <div className="Featured">
                        <h6 className='h6'>Featured Post</h6>
                        <h3>Step-by-step guide to choosing great <br></br> font pairs</h3>
                        <h6>By <span>John Doe</span>    l   May 23, 2022 </h6>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br/> nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        <div id="butn">
                        <YellowButton>Read More  <FaAngleRight/> </YellowButton>
                        </div>
                    </div>
            </div>
            <div className="col-lg-5 col-md-6 img-man" data-aos="flip-left"  data-aos-duration="1500">
                <img src={man} alt="" />
            </div>
            </div>
            </div>
         
           
        </div>
    );
}

export default FeaturedPost;
