import './Post.css';
import YellowButton from '../../Component/Buttons/Buttons';
import { FaAngleRight } from "react-icons/fa";
import building from '../../assets/images/building.png'
import LiftTitle from '../../Component/Title/Title';
const Post = () => {
    return (
        <div className='post pt-5 pb-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-6">
                       <LiftTitle>Featured Post</LiftTitle>
                    <div className="featured">
                       <div className="hours-img"  data-aos="fade-right"  data-aos-duration="1500">
                       <img src={building} alt=''/>
                       </div>
                        <h6>By <span style={{"margin-right":"10px"}}>John Doe</span> May 23, 2022</h6>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing <br/>
                         elit, sed do eiusmod tempor.</h4>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore <br/> eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        <YellowButton>Read More  <FaAngleRight/> </YellowButton>
                    </div>
                    </div>

                    <div className="col-lg-5 col-md-6">
                    <LiftTitle>All Posts</LiftTitle>

                    <div className="All-Posts">
                    <h6>By <span style={{"margin-right":"10px"}}>John Doe </span> Aug 23, 2021 </h6>
                    <h5>8 Figma design systems that you can download for free today.</h5>
                    </div>

                    <div className="All-Posts">
                    <h6>By <span style={{"margin-right":"10px"}}>John Doe</span> Aug 23, 2021 </h6>
                    <h5>8 Figma design systems that you can download for free today.</h5>
                    </div>

                    <div className="All-Posts">
                    <h6>By <span style={{"margin-right":"10px"}}>John Doe</span>  Aug 23, 2021 </h6>
                    <h5>8 Figma design systems that you can download for free today.</h5>
                    </div>

                    <div className="All-Posts">
                    <h6>By <span style={{"margin-right":"10px"}}>John Doe</span>    Aug 23, 2021 </h6>
                    <h5>8 Figma design systems that you can download for free today.</h5>
                    </div>

                    
                    </div>
            
                  
            </div>
            </div>
            
         
        </div>
    );
}

export default Post;
