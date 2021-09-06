import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainScreen from './MainScreen.js';
const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={MainScreen} />
      </Switch>
  </BrowserRouter>
    
    </div>
    );
}
 
export default App;