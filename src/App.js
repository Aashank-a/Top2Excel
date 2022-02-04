import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Index from './components/Index';

function App() {
  return (
    <>
      <Router>
        <Home/>
        <Switch>
          <Route path="/Login">
            <Index/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
