import YellowButton from '../../../../Component/Buttons/Buttons';
import './Conversation.css'

const Conversation = () => {
    return (
        <div className='Conversation container'>
            <div className="contact-text">
                <h6 className='h6'>Contact us</h6>
                <h2>Let’s Start a Conversation</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    <br/> et dolore magna aliqua. Ut enim ad minim.</p>
            </div>

            <div className="divBlue">
               <div className="workhour ">
                <p>Working hours</p>
                <hr />
                <h5>Monday To Friday<br/>9:00 AM to 8:00 PM </h5>
                <p>Our Support Team is available 24/7</p>
            </div>
            <div className="contact">
            <p>Contact Us</p>
                <hr />
                <h5>020 7993 2905</h5>
                <p>hello@finsweet.com</p>
            </div>
            </div>
            
            <div className="contact-form">
                <form action="">
                <input type="text" placeholder='Full Name'/>
                <input type="text" placeholder='Your Email'/>
                <select>
                    <option>Query Related </option>
                    <option>1</option>
                    <option>2</option>
                </select>
                <input type="area" placeholder='Message' className='Message'/>
                </form>
                <div className="send-btn">
                <YellowButton>Send Message</YellowButton>
                </div>
             
             
            </div>
                    </div>
        
    );
}

export default Conversation;
