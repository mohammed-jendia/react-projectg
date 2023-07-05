import './Read.css'
import ColRead from './colRead';

import imgPosts1 from '../../../../assets/images/img1-post.png'
import imgPosts2 from '../../../../assets/images/img2-post.png'
import imgPosts3 from '../../../../assets/images/img3-post.png'

const Read = () => {
    return (
        <div className = "container Read">
        <div className="row">

           <ColRead img = {imgPosts1} title = "By John Doe   l   Aug 23, 2021 " interduction="A UX Case Study Creating a Studious Environment for Students: " details= "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint cupidatat non proident."/>
           <ColRead img = {imgPosts2} title = "By John Doe   l   Aug 23, 2021 " interduction="A UX Case Study Creating a Studious Environment for Students: " details= "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint cupidatat non proident."/>
           <ColRead img = {imgPosts3} title = "By John Doe   l   Aug 23, 2021 " interduction="A UX Case Study Creating a Studious Environment for Students: " details= "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint cupidatat non proident."/>
          
           </div>
           <div className="line">
            <hr></hr>
           </div>
          </div> 
    );
}

export default Read;



