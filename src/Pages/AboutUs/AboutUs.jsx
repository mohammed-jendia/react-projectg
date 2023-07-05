import './AboutUs.css'
import StartedAbout from './SectionAboutUs/StartedAbout/StartedAbout';
import OurMision from './SectionAboutUs/OurMision/OurMision'
import OurTeam from './SectionAboutUs/OurTeam/OurTeam'
import AuthorsAboutUs from './SectionAboutUs/AuthorsAboutUs/AuthorsAboutUs';
import Join from '../../Sections/Join/Join'

const AboutUs = () => {
    return (
        <div>
            <StartedAbout/>
            <OurMision/>
            <OurTeam/>
            <AuthorsAboutUs/>
            <Join/>
        </div>
    );
}

export default AboutUs;

