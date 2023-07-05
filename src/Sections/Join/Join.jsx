import './Join.css'
import {CenterTitle} from '../../Component/Title/Title';
import YellowButton from '../../Component/Buttons/Buttons';

const Join = () => {
    return (
        <div className='join container'>
            <div className="row">
            <div className="col-lg-12"> 
            <CenterTitle >Join our team to be a part <br/> of our story</CenterTitle>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br></br> elit, sed do eiusmod tempor incididunt.</p>
            <div className="butn">
            <YellowButton>Join Now</YellowButton>
            </div>
          </div>
            </div>
           
         
        </div>
    );
}

export default Join;
