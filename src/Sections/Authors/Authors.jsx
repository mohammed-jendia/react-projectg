import './Authors.css';
import {CenterTitle} from '../../Component/Title/Title';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import DataAuthors from './DataAuthors';


const Authors = () => {

    return (
        <div className='Authors container pt-5 pb-5'>
          <CenterTitle >List of Authors</CenterTitle>

          <div className="box">
          <div className="row">
                    {card}
                </div>
          </div>
        </div>
    );
}

const card = DataAuthors.map((itmes) => {
    return(
              <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card-Authors " >
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
export default Authors;
