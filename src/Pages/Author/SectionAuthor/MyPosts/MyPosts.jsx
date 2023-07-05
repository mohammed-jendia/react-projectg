import './MyPosts.css'

import '../../../Blog/SectionBlog/Allposts/Allposts.css'
import MyPostRow from './MyPostRow';
import LiftTitle from '../../../../Component/Title/Title'
import myPost2 from '../../../../assets/images/myPost2.png'
import myPost3 from '../../../../assets/images/myPost3.png'

const MyPosts = () => {
    return (
        <div className='MyPosts '>

            <div className='Allposts'>
            
            <LiftTitle>My posts</LiftTitle>
            
           <MyPostRow img = {myPost3} title = "BUSINESS" interduction="Font sizes in UI design: The complete guide to follow" details= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
           <MyPostRow img = {myPost2} title = "ECONOMY" interduction="How to build rapport with your web design clients" details= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
        
        </div>
        </div>
    );
}

export default MyPosts;
