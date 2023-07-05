import './Blog.css'
import Allposts from './SectionBlog/Allposts/Allposts';
import FeaturedPost from './SectionBlog/FeaturedPost/FeaturedPost';
import Catagory from '../../Sections/Catagory/Catagory'
import Join from '../../Sections/Join/Join'
import LiftTitle from '../../Component/Title/Title';

const Blog = () => {
    return (
        <div className='Blog'>
            <FeaturedPost/>
            <Allposts/>
            <LiftTitle>All Categories</LiftTitle>
            <Catagory/>
            <Join/>

        </div>
    );
}

export default Blog;
