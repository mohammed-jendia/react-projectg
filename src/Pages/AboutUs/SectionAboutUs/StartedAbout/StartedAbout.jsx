import './StartedAbout.css'
import frendsImge from '../../../../assets/images/photo2-of-woman-wearing-eyeglasses-3184405.png'

const StartedAbout = () => {
    return (
        <div className='StartedAbout container'> 

            <div className="row top">
            <div className="col-lg-7">
            <div className="divText2">
                <h6 className='h6'>ABOUT US</h6>
                <h2>We are a team of content writers who share their learnings</h2>
            </div>
            </div>
                <div className="col-lg-5">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>

            <div className="frends-img">
            <img src={frendsImge} alt="" />
             </div>

             <div className="divYellow">
                <div className="number">
                <h1>12+</h1>
                <p>Blogs Published</p>
                </div>
                <div className="number">
                <h1>18K+</h1>
                <p>Views on Finsweet</p>
                </div>
                <div className="number">
                <h1>30K+</h1>
                <p>Total active Users</p>
                </div>
             </div>

             <div className="background">
            <div className="divLift"></div>
            <div className="divRight"></div>
            </div>

            </div>

    );
}

export default StartedAbout;
