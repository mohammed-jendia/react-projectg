import './Footer.css';
import YellowButton from '../../Component/Buttons/Buttons';
import NavFooter from './Nav_footer';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='foooter'>
            <div className="parent container">
                <div className="footer-nav pt-4">
                <NavFooter/>
                </div>
                <div className="child"> 
                <h3>Subscribe to our news letter to get < br></br>latest updates and news</h3>
                <div className="Subscribe">
                <input type="text" placeholder='Enter Your Email' />
                <YellowButton>Subscribe</YellowButton>
                </div>
                
                </div>
                <div className="footer-end">
                    <p>Subscribe to our news letter to get latest <br/> <span>Hello@finsweet.com</span> 020 7993 2905</p>
                    <div className="socialMedia">
                        <FaFacebook/>
                        <FaTwitter/>
                        <FaInstagram/>
                        <FaLinkedin/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
