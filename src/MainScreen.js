import NavBar from './NavBar.js';
import Hero from './Hero'
import FeatureSection from './SubComps/FeatureSection.js';
import Footer from './Footer'
import CardLanding from './SubComps/CardLanding.js';
import LandingSection from '../src/SubComps/LandingSection';
import Stats from './SubComps/Stats.js';


const MainScreen = () => {
    return ( 
        <div>
          <NavBar logo = "Bouts"/>
          <Hero/>
          <FeatureSection/>
          <CardLanding/>
          <LandingSection/>
          <Stats/>
          <Footer/>
         
        </div>
     );
}
 
export default MainScreen;