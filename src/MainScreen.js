import NavBar from './NavBar.js';
import Hero from './Hero'
import FeatureSection from './FeatureSection.js';
import Footer from './Footer'
import CtaSection from './CtaSection.js';
import Steps from './Steps.js';
import CardLanding from './CardLanding.js';
import LandingSection from '../src/SubComps/LandingSection';


const MainScreen = () => {
    return ( 
        <div>
          <NavBar/>
          <Hero/>
          <FeatureSection/>
          <Steps/>
          <CardLanding/>
          <LandingSection/>
          <CtaSection/>
          <Footer/>
         
        </div>
     );
}
 
export default MainScreen;