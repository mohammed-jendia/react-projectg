import './OurTeam.css'
import group from '../../../../assets/images/ground-group-growth-hands-461049.png'
import persons from '../../../../assets/images/three-persons-sitting-on-the-stairs-talking-with-each-other-1438072.png'
const OurTeam = () => {
    return (
        <div className='OurTeam container'>

            <div className="row Team">
            
            <div className="col-lg-6 col-md-6">
            <div className="Team-text">
                <h3>Our team of creatives</h3>
                <h5>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor<br/> incididunt.</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br/>ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br/>aliquip ex ea commodo consequat. Duis aute irure dolor in <br/>reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
            </div>
            </div>

            <div className="col-lg-6 col-md-6">
                <div className="our-img">
                <img src={group} alt="" />
        </div>
            </div>
        </div>
        

        <div className="row Team">
            
            <div className="col-lg-6 col-md-6">
            <div className="persons-img">
                <img src={persons} alt="" />
                </div>
            </div>

            <div className="col-lg-6 col-md-6">
            <div className="Team-text persons">
                <h3>Why we started this Blog</h3>
                <h5>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor<br/> incididunt.</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br/>ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br/>aliquip ex ea commodo consequat. Duis aute irure dolor in <br/>reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
            </div>
            </div>
        </div>


         </div>
    );
}

export default OurTeam;
