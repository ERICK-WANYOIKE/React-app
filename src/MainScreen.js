import NavBar from './NavBar.js';
import Hero from './Hero'
import FeatureSection from './FeatureSection.js';
import Footer from './Footer'
import CtaSection from './CtaSection.js';
import Steps from './Steps.js';
import CardLanding from './CardLanding.js';


const MainScreen = () => {
    return ( 
        <div>
          <NavBar/>
          <Hero/>
          <FeatureSection/>
          <Steps/>
          <CardLanding/>
          <CtaSection/>
          <Footer/>
         
        </div>
     );
}
 
export default MainScreen;