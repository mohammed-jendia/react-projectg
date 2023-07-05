import './All-PostCatacory.css';
import PostRowCatacory from './PostRowCatacory';

import '../../../Blog/SectionBlog/Allposts/Allposts'

import imgPosts1 from '../../../../assets/images/img1-post.png'

import icon1 from '../../../../assets/images/icon (2).png'
import icon2 from '../../../../assets/images/icon (1).png'
import icon3 from '../../../../assets/images/icon (3).png'
import icon4 from '../../../../assets/images/icon (5).png'

const AllPostCatacory = () => {
    return (

        <div className='Allposts AllPostCatacory container'>
         <div className="left-catagory col-lg-9 col-md-9 col-sm-12">

      <PostRowCatacory img = {imgPosts1} title = "Business" interduction="Top 6 free website mockup tools 2022" details= "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."/>
       <PostRowCatacory img = {imgPosts1} title = "Business" interduction="Step-by-step guide to choosing great font pairs" details= "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."/>
       <PostRowCatacory img = {imgPosts1} title = "Business" interduction="Ten free foogle fonts that you should use" details= "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."/>
       <PostRowCatacory img = {imgPosts1} title = "Business" interduction="What did I learn from doing 50+ design sprints?" details= "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."/>
     
        </div>
      
       <div className="box-catadory col-lg-3 col-md-3 col-sm-12">

        <div className="parent-catagory">
        <h3>Categories</h3>
                        <div className="card-Catagory ">
                        <div className="icon-img">
                        <img src={icon1} alt="" />
                       </div>
                       <h4>Startup</h4>
                    </div>
                    <div className="card-Catagory ">
                    <div className="icon-img icon2">
                        <img src={icon2} alt="" />
                       </div>
                        <h4>Business</h4>
                    </div>
                    <div className="card-Catagory ">
                    <div className="icon-img">
                        <img src={icon3} alt="" />
                       </div>
                        <h4>Economy</h4>
                    </div>
                    <div className="card-Catagory ">
                    <div className="icon-img">
                        <img src={icon4} alt="" />
                       </div>
                        <h4>Economy</h4>
                    </div>
        </div>
                       


                    <div className="All-Tags">
                    <h3>All Tags</h3>

                    <div className="divTags">
                        <div className="Tag Tag1"><h6>Business</h6></div>
                        <div className="Tag Tag2"><h6>Experience</h6></div>
                    </div>
                    <div className="divTags">
                    <div className="Tag Tag3"><h6>Screen</h6></div>
                        <div className="Tag Tag4"><h6>Technology</h6></div>
                    </div>
                    <div className="divTags">
                    <div className="Tag Tag5"><h6>Marketing</h6></div>
                        <div className="Tag Tag6"><h6>Life</h6></div>
                    </div>
                    </div>


        </div>       
    </div>

    );
}

export default AllPostCatacory;
