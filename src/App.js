import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainScreen from './MainScreen.js';
import GetScreen from '../src/SubComps/GetScreen';
import LearnMore from '../src/SubComps/LearnMore';

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={MainScreen} />
        <Route path="/get started" exact={true} component={GetScreen} />
        <Route path="/learn more" exact={true} component={LearnMore} />
   
        
        
    
      </Switch>
  </BrowserRouter>
    
    </div>
    );
}
 
export default App;