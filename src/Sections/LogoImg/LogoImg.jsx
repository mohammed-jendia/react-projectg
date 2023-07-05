import './LogoImg.css'

import Featured from '../../assets/images/Featured in.png'
import logo1 from '../../assets/images/Logo 1.png'
import logo2 from '../../assets/images/Logo 2.png'
import logo3 from '../../assets/images/Logo 3.png'
import logo4 from '../../assets/images/Logo 4.png'
import logo5 from '../../assets/images/Logo 5.png'

import profile from '../../assets/images/Profile picture.png'

import { FaArrowLeft , FaArrowRight} from "react-icons/fa";


const LogoImg = () => {
    return (
            <div className="container">

          <div className=" logo-images">
            <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-4 ">
                <div className="Featured">
                <img src={Featured} alt="" />
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4">
                <img src={logo1} alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4">
                <img src={logo2} alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4">
                <img src={logo3} alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4">
                <img src={logo4} alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4">
                <img src={logo5} alt="" />
            </div>
            </div>
            </div>

            <div className="people-say">
                <div className="row">
                <div className=" col-lg-6 col-md-6">
                    <div className="left-text">
                    <h6>TESTIMONIALs</h6>
                    <h3>What people say <br></br>about our blog</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur  <br/>  adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
              
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="right-text">
                    <h5>Lorem ipsum dolor sit amet,<br/>  consectetur adipiscing elit,
                     sed do <br/>  eiusmod tempor incididunt ut labore et <br/> dolore magna aliqua.</h5>
                     <div className="persone">
                        <div className="person-profile">
                        <img src={profile} alt="" />
                            <h5>Jonathan Vallem<p>New york, USA</p></h5>
                        </div>
                           
                        <div className="Stock-icon">
                            <a href='/BlogPost' className="StockLeft"><FaArrowLeft/></a>
                            <a href='/BlogPost' className="StockRight"><FaArrowRight/></a>
                        </div>
                     </div>
                    </div>
              
                     </div>
                </div>
                
            </div>

        </div>
    );
}

export default LogoImg;
