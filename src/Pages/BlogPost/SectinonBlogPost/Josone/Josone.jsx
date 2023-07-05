import './Josone.css';
import profile from '../../../../assets/images/Profile picture.png'
import icon2 from '../../../../assets/images/icon (1).png'
import larg from '../../../../assets/images/photo-of-woman-wearing-eyeglasses-3184405.png'
import pointer from '../../../../assets/images/pointer.png'
import LiftTitle from '../../../../Component/Title/Title'

const Josone = () => {
    return (
        <div className='Josone container'>
            <div className="Andrew">
            <div className="leftFlex person-profile">
                <img src={profile} alt="" />
                <h5>Andrew Jonson<p>Posted on 27th January 2022</p></h5>
                </div>
                <h2>Step-by-step guide to choosing <br></br> great font pairs</h2>
                <div className="icon-img leftFlex">
                <img src={icon2} alt="" />
                <h4>Startup</h4>
                </div>
            </div>
           
                <div className="larg-img">
                    <img src={larg} alt="" />
                </div>

                <div className="larg-text">
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit, sed do eiusmod.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                         incididunt ut labore <br/> et dolore magna aliqua. Non blandit massa enim nec.
                          Scelerisque viverra mauris in aliquam sem. At risus viverra <br/> adipiscing at in tellus. 
                          Sociis natoque penatibus et magnis dis parturient montes.
                           Ridiculus mus mauris vitae <br/> ultricies leo. Neque egestas congue quisque egestas diam.
                            Risus in hendrerit gravida rutrum quisque non.</p>

                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit, sed do eiusmod.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                         incididunt ut labore <br/> et dolore magna aliqua. Non blandit massa enim nec.
                          Scelerisque viverra mauris in aliquam sem. At risus viverra <br/> adipiscing at in tellus. 
                          Sociis natoque penatibus et magnis dis parturient montes.
                           Ridiculus mus mauris vitae <br/> ultricies leo. Neque egestas congue quisque egestas diam.
                            Risus in hendrerit gravida rutrum quisque non.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                         incididunt ut labore <br/> et dolore magna aliqua. Non blandit massa enim nec.
                          Scelerisque viverra mauris in aliquam sem. At risus viverra <br/> adipiscing at in tellus. 
                          Sociis natoque penatibus et magnis dis parturient montes.
                           Ridiculus mus mauris vitae <br/> ultricies leo. Neque egestas congue quisque egestas diam.
                            Risus in hendrerit gravida rutrum quisque non.</p>

                            <div className="pointer">
                            <div className=" leftFlex">
                            <img src={pointer} alt="" /><h4>Lorem ipsum dolor sit amet</h4>
                            </div>
                            <div className=" leftFlex">
                            <img src={pointer} alt="" /><h4>Non blandit massa enim nec scelerisque</h4>
                            </div>
                            <div className=" leftFlex">
                            <img src={pointer} alt="" /><h4>Neque egestas congue quisque egestas</h4>  
                            </div>
                            </div>
                         
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                         incididunt ut labore <br/> et dolore magna aliqua. Non blandit massa enim nec.
                          Scelerisque viverra mauris in aliquam sem. At risus viverra <br/> adipiscing at in tellus. 
                          Sociis natoque penatibus et magnis dis parturient montes.
                           Ridiculus mus mauris vitae <br/> ultricies leo. Neque egestas congue quisque egestas diam.
                            Risus in hendrerit gravida rutrum quisque non.</p>
                         
                       <h3>Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit, sed do eiusmod.</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                         incididunt ut labore <br/> et dolore magna aliqua. Non blandit massa enim nec.
                          Scelerisque viverra mauris in aliquam sem. At risus viverra <br/> adipiscing at in tellus. 
                          Sociis natoque penatibus et magnis dis parturient montes.
                           Ridiculus mus mauris vitae <br/> ultricies leo. Neque egestas congue quisque egestas diam.
                            Risus in hendrerit gravida rutrum quisque non.</p>
                </div>

                <LiftTitle>What to read next</LiftTitle>
          </div>

    );
}

export default Josone;
