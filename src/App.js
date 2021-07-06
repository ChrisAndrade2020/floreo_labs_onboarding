import './App.css';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';

//importing components
import Giphy from './Components/giphy';
import Home from './Components/Home';
import BuildLog from './Components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <div className="navBar">
        <Link to="./Home" className="navigationItems"> <h3> Home </h3></Link>
        <Link to="./giphy" className="navigationItems"> <h3> GIPHY </h3></Link>
        <Link to="./About" className="navigationItems"> <h3> About / Build Log </h3></Link>
      </div>
        
        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>

          <Route path="/giphy">
            <Giphy />
          </Route>

          <Route path="/About">
            <BuildLog />
          </Route>

    

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;