import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainScreen from './MainScreen.js';
import Solutions from './Solutions.js';
import Docs from './Docs.js';
import Contacts from './Contacts.js';
import AirFreight from '../src/subComponents/AirFreight'
import SeaFreight from '../src/subComponents/SeaFrieght'
const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={MainScreen} />
        <Route path="/solution" exact={true} component={Solutions} />
        <Route path="/docs" exact={true} component={Docs} />
        <Route path="/contacts" exact={true} component={Contacts} />
        <Route path="/airfreight" exact={true} component={AirFreight} />
        <Route path="/seafreight" exact={true} component={SeaFreight} />
    
      </Switch>
  </BrowserRouter>
    
    </div>
    );
}
 
export default App;