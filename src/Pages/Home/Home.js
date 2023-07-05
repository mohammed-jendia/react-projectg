import './Home.css'
import Header from '../../Sections/Header/Header'
import Post from '../../Sections/Post/Post'
import AboutusHome from '../../Sections/AboutusHome/AboutusHome'
import Catagory from '../../Sections/Catagory/Catagory'
import StartedOut from '../../Sections/StartedOut/StartedOut'
import Authors from '../../Sections/Authors/Authors'
import LogoImg from '../../Sections/LogoImg/LogoImg'
import Join from '../../Sections/Join/Join'
import { CenterTitle } from '../../Component/Title/Title';

const Home = () => {
    return (
        <div>
            <Header/>
            <Post/>
            <AboutusHome/>
            <CenterTitle>Featured Post</CenterTitle>
            <Catagory/>
            <StartedOut/>
            <Authors/>
            <LogoImg/>
            <Join/>
        </div>
    );
}

export default Home;
