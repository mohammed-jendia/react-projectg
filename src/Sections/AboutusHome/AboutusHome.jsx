import './AboutusHome.css';
import { FaAngleRight } from "react-icons/fa";


const AboutusHome = () => {

  

    return (
            <div className="container pt-5 AboutusHome">
                
                <div className="background">
                <div className="divLift"></div>
                 <div className="divRight"></div>
                </div>
                
            <div className="about">
                <div className="row">
                    
                    <div className="col-lg-6">
                <div className="about-us"   
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500">

                        <h6>ABOUT US</h6>
                        <h3>We are a community of <br/> content writers who share their <br/> learnings</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href='/#'>Read More <FaAngleRight/> </a>
                </div>
                    </div>

                    <div className="col-lg-6" >
                <div className=" our-mision " 
                     data-aos="fade-down"
                     data-aos-easing="linear"
                     data-aos-duration="1500"
                   >
                <h6>Our mision</h6>
                <h4>Creating valuable content for <br></br> creatives all around the world</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                     Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                    </div>
                </div>
                
                 </div>
                  </div>
          
    );
}

export default AboutusHome;
