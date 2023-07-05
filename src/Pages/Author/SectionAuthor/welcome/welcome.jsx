import './welcome.css'
import myPost1 from '../../../../assets/images/myPost1.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Welcome = () => {
    return (
        <div className='Welcome '>
            <div className="container">
            <div className="AndrewJonhson">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <img src={myPost1} alt="" />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="text-Andrew">
                        <h2>Hey there, I’m Andrew Jonhson <br/> and welcome to my Blog</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        <br/> incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque
                        <br/> viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
                        <div className="socialMedia">
                        <FaFacebook/>
                        <FaTwitter/>
                        <FaInstagram/>
                        <FaLinkedin/>
                    </div>
                        </div>
                        </div>
                    </div>
            </div>

        <div className="background">
              <div className="divLift"></div>
            <div className="divRight"></div>
         </div>

            </div>
          
        </div>
    );


}

export default Welcome;
