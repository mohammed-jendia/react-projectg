import './Allposts.css'
import PostRow from './PostRow';
import LiftTitle from '../../../../Component/Title/Title'
import { FaAngleLeft , FaAngleRight} from "react-icons/fa";

import imgPosts1 from '../../../../assets/images/img1-post.png'
import imgPosts2 from '../../../../assets/images/img2-post.png'
import imgPosts3 from '../../../../assets/images/img3-post.png'
import imgPosts4 from '../../../../assets/images/img4-post.png'
import imgPosts5 from '../../../../assets/images/img5-post.png'

const Allposts = () => {
    return (
        <div className='Allposts container'>
            <LiftTitle>All posts</LiftTitle>
            <hr className='line'/>
           <PostRow img = {imgPosts1} title = "Startup" interduction="Design tips for designers that cover everything you need" details= "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."/>
           <PostRow img = {imgPosts2} title = "BUSINESS" interduction="How to build rapport with your web design clients" details= "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."/>
           <PostRow img = {imgPosts3} title = "Startup" interduction="Logo design trends to avoid in 2022" details= "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."/>
           <PostRow img = {imgPosts4} title = "TECHNOLOGY" interduction="8 Figma design systems you can download for free today" details= "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."/>
           <PostRow img = {imgPosts5} title = "ECONOMY" interduction="Font sizes in UI design: The complete guide to follow" details= "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."/>
          <div className="Stock">
            <a href="/Author" className="leftIcon"> <FaAngleLeft/> Prev </a>
            <a href="/Catagory" className="rightIcon"> Next <FaAngleRight/></a>
          </div>
        </div>
    );
}

export default Allposts;
