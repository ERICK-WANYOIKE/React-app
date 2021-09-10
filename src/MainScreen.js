import NavBar from './NavBar.js';
import Hero from './Hero'
import FeatureSection from './FeatureSection.js';
import Footer from './Footer'
import CtaSection from './CtaSection.js';
import Blog from './Blog.js';
import Steps from './Steps.js';
import Teams from './Teams.js';
import Content from './Content.js';

const MainScreen = () => {
    return ( 
        <div>
          <NavBar/>
          <Hero/>
          <FeatureSection/>
          <Content/>
          <Steps/>
          <Teams/>
          <CtaSection/>
          <Blog/>
          <Footer/>
         
        </div>
     );
}
 
export default MainScreen;