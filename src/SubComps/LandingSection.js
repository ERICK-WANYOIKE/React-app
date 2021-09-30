import React, {useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
const LandingSection = () => {
    useEffect(() => {
        AOS.init({duration:200});
       }, []);
    return ( 
    <div data-aos="fade-left" >
    
    </div>
 
       
     );
}
 
export default LandingSection;