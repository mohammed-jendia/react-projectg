import './Catagory.css';
// import {CenterTitle} from '../../Component/Title/Title';

import icon1 from '../../assets/images/icon (2).png'
import icon2 from '../../assets/images/icon (1).png'
import icon3 from '../../assets/images/icon (3).png'
import icon4 from '../../assets/images/icon (5).png'




const Catagory = () => {
    return (
        <div className='container Catagory'>
          {/* <CenterTitle >Featured Post</CenterTitle> */}
            <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card-Catagory">
                    <div className="icon-img">
                    <img src={icon1} alt="" />
                    </div>
                    <h4>Business</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card-Catagory" >
            <div className="icon-img icon2">
                    <img src={icon2} alt="" />
                    </div>
                    <h4>Startup</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card-Catagory">
            <div className="icon-img">
                    <img src={icon3} alt="" />
                    </div>
                    <h4>Economy</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card-Catagory">
            <div className="icon-img">
                    <img src={icon4} alt="" />
                    </div>
                    <h4>Technology</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                </div>
            </div>
            </div>

        </div>
    );
}

export default Catagory;
