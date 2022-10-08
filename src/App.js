import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content"> 
        <Switch>
          <Route exact path="/">
            
          </Route>    

          <Route path="/login">
            <Login /> 
          </Route> 

          <Route path="/blogs/:id">
             
          </Route>  

          <Route path="*">
            {/* <NotFound />  */}
          </Route>  
            
        </Switch>
        </div>
        
      </div>
      </Router>
  );
}

export default App;
