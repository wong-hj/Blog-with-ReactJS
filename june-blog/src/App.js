
import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './create';
import BlogDetails from './blogdetails';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/"> 
              <Home></Home>
            </Route>

            <Route path="/create"> 
              <Create></Create>
            </Route>

            <Route path="/blogs/:id"> 
              <BlogDetails></BlogDetails>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
