const { default: NavBar } = require("./NavBar")
const { default: ContactsHeader } = require("./ContactsHeader")
const { default: Footer } = require("./Footer")

const Contacts = () => {
    return ( 
        <>
        <NavBar/>
        <ContactsHeader/>
        <Footer/>
        </>
     );
}
 
export default Contacts;