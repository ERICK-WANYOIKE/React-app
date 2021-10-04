import NavBar from './NavBar.js';
import Hero from './Hero';
import Footer from './Footer';
import CardSection from './CardSection.js';
import Feature from './Feature.js';

const MainScreen = () => {
    return ( 
        <div>
          <NavBar logo = "Bouts"/>
          <Hero/>
          <CardSection/>
          <Feature/>
          <Footer/>
         
         
        </div>
     );
}
 
export default MainScreen;