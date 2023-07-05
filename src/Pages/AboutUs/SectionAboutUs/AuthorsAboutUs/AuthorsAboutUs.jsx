import './AuthorsAboutUs.css'
import DataAuthorsAboutUs from './DataAuthorsAboutUs';
import {CenterTitle} from '../../../../Component/Title/Title';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
    
const AuthorsAboutUs = () => {
    
        return (
            <div className='Authors container pt-5'>
              <CenterTitle >List of Authors</CenterTitle>
    
              <div className="box boxAbout">
              <div className="row ">
                        {card}
                    </div>
              </div>
            </div>
        );

        }
    const card = DataAuthorsAboutUs.map((itmes) => {
        return(
                  <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card-Authors AuthorsAboutUs">
                    <img src={itmes.img} alt="" />
                        <h4>{itmes.name}</h4>
                        <p>{itmes.jop}</p>
                        <div className="socialMedia">
                            <FaFacebook/>
                            <FaTwitter/>
                            <FaInstagram/>
                            <FaLinkedin/>
                        </div>
                    </div>
                </div>
        )
    })
    

export default AuthorsAboutUs;
